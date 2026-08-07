let currentLanguage = localStorage.getItem("language") || "en";

function getTranslation(lang, key) {

    return key
        .split(".")
        .reduce((obj, part) => obj && obj[part], translations[lang]);

}

function updateLanguage() {

    document.querySelectorAll("[data-lang]").forEach(element => {

        const key = element.dataset.lang;

        const text = getTranslation(currentLanguage, key);

        if (text) {
            element.innerHTML = text;
        }

    });

    const en = document.getElementById("lang-en");
    const el = document.getElementById("lang-el");

    if (en && el) {

        en.classList.toggle("active", currentLanguage === "en");
        el.classList.toggle("active", currentLanguage === "el");

    }

}

document.getElementById("lang-en").addEventListener("click", (event) => {

    event.preventDefault();

    currentLanguage = "en";

    localStorage.setItem("language", currentLanguage);

    updateLanguage();

});

document.getElementById("lang-el").addEventListener("click", (event) => {

    event.preventDefault();

    currentLanguage = "el";

    localStorage.setItem("language", currentLanguage);

    updateLanguage();

});

updateLanguage();