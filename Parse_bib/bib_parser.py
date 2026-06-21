#!/usr/bin/env python3

import re
import warnings
from pathlib import Path

BIB_FILE = "cv_pub.bib"
OUTPUT_FILE = "output.html"

def cleanup_text(text):
    """
    Clean BibTeX formatting artifacts before inserting
    into HTML.
    """

    if not text:
        return text

    return (
        text
        .replace("{", "(")
        .replace("}", ")")
    )

def parse_bibtex(filename):
    """
    Parse a BibTeX file into a list of dictionaries.
    Assumes reasonably well-formed BibTeX (e.g. DBLP exports).
    """

    text = Path(filename).read_text(encoding="utf-8")

    pattern = r'@(\w+)\s*\{([^,]+),(.*?)\n\}'
    matches = re.finditer(pattern, text, re.DOTALL)

    entries = []

    for match in matches:
        entry_type = match.group(1).lower()
        entry_id = match.group(2).strip()
        body = match.group(3)

        entry = {
            "ENTRYTYPE": entry_type,
            "ID": entry_id
        }

        field_pattern = r'(\w+)\s*=\s*\{((?:[^{}]|(?:\{[^{}]*\}))*?)\}'
        fields = re.finditer(field_pattern, body, re.DOTALL)

        for field in fields:
            key = field.group(1).lower()
            value = " ".join(field.group(2).split())
            entry[key] = value

        entries.append(entry)

    return entries

def warn_missing(entry, fields):
    for field in fields:
        if field not in entry:
            warnings.warn(
                f"Entry '{entry['ID']}' missing field '{field}'"
            )

def clean_authors(author_string):

    authors = [
        a.strip()
        for a in author_string.split(" and ")
    ]

    if len(authors) == 1:
        return authors[0]

    if len(authors) == 2:
        return f"{authors[0]} and {authors[1]}"

    return ", ".join(authors[:-1]) + f", and {authors[-1]}"

def format_inproceedings(entry):

    warn_missing(
        entry,
        ["author", "title", "booktitle", "year"]
    )

    parts = []

    if "author" in entry:
        parts.append(f"{clean_authors(entry['author'])}.")

    if "title" in entry:
        parts.append(f"“{cleanup_text(entry['title'])}”.")

    if "booktitle" in entry:
        parts.append(f"In: <em> {cleanup_text(entry['booktitle'])} </em>.")

    if "editor" in entry:
        parts.append(
            f"Ed. by {clean_authors(entry['editor'])}."
        )

    if "series" in entry:
        parts.append(f"{cleanup_text(entry['series'])}.")

    if "publisher" in entry:
        parts.append(f"{cleanup_text(entry['publisher'])},")

    if "year" in entry:
        parts.append(f"{cleanup_text(entry['year'])},")

    if "pages" in entry:
        if "-" in entry['pages']:
            parts.append(f" pp. {entry['pages']}.")
        else:
            parts.append(f" p. {entry['pages']}.")

    return " ".join(parts)

def format_article(entry):

    warn_missing(
        entry,
        ["author", "title", "journal", "year"]
    )

    parts = []

    if "author" in entry:
        parts.append(f"{clean_authors(entry['author'])}.")

    if "title" in entry:
        parts.append(f"“{cleanup_text(entry['title'])}”.")

    if "journal" in entry:
        parts.append(f"<em>{cleanup_text(entry['journal'])}</em>")

    if "volume" in entry:
        parts.append(entry["volume"])

    if "number" in entry:
        parts.append(f"({cleanup_text(entry['number'])})")

    if "year" in entry:
        parts.append(f"({entry['year']})")

    if "pages" in entry:
        if "-" in entry['pages']:
            parts.append(f" pp. {entry['pages']}.")
        else:
            parts.append(f" p. {entry['pages']}.")

    return " ".join(parts)

def generate_html(journals, conferences):

    html = []

    html.append("<main>")
    html.append("")

    html.append("<h1>Journal Publications</h1>")
    html.append("<ol>")

    for paper in journals:
        html.append(
            f"    <li>{format_article(paper)}</li>"
        )

    html.append("</ol>")
    html.append("")

    html.append("<h1>Conference Publications</h1>")
    html.append("<ol>")

    for paper in conferences:

        html.append(
            f"    <li>{format_inproceedings(paper)}</li>"
        )


    html.append("</ol>")
    html.append("")
    html.append("</main>")

    return "\n".join(html)

def main():

    entries = parse_bibtex(BIB_FILE)

    journals = []
    conferences = []

    for entry in entries:

        if entry["ENTRYTYPE"] == "article":
            journals.append(entry)

        elif entry["ENTRYTYPE"] == "inproceedings":
            conferences.append(entry)

    journals.sort(
        key=lambda x: int(x.get("year", 0)),
        reverse=True
    )

    conferences.sort(
        key=lambda x: int(x.get("year", 0)),
        reverse=True
    )

    html = generate_html(
        journals,
        conferences
    )

    Path(OUTPUT_FILE).write_text(
        html,
        encoding="utf-8"
    )

    print(
        f"Generated {OUTPUT_FILE}"
    )
    print(
        f"Journal papers: {len(journals)}"
    )
    print(
        f"Conference papers: {len(conferences)}"
    )

if __name__ == "__main__":
    main()

