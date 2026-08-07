
const translations = {

    en: {

        nav: {

            home: "Home",
            about: "About",
            publications: "Publications",
            projects: "Projects",
            teaching: "Teaching",
            cv: "CV"

        },

        home: {

            hero: {

                name: "Theofilos Triommatis",

                position: "Postdoctoral Researcher",

                institution: "Technical University of Crete",

                lab: "Dynamic Systems and Simulation Laboratory",

                address: "Technical University of Crete Campus",

                address_code: "Chania 73100, Greece",

                tel: "Tel. +30 28210 37289",

                email: "Email",

                mail_at: "at",

                mail_dot: "dot"

            },

            welcome: {

                title: "Welcome to my personal webpage!",

                text1:
                    "I am a postdoctoral researcher in the", 
                    
                text2: " at the ",  
                
                text3:  "My research lies at the intersection of algorithm design, optimization, and decision making. I develop efficient algorithms that help autonomous systems make better decisions while studying the theoretical limits of solving complex optimization problems. I enjoy bridging mathematical theory with practical applications, designing algorithms that are not only provably efficient but also useful in real-world settings."

            },

            current_research: {

                title: "Current Research",

                p1:
                    "My current research investigates decision-making mechanisms for optimization problems arising in autonomous systems in logistics. I study how optimization algorithms can be used to identify optimal or near-optimal decisions for unmanned vehicles operating in dynamic environments.",

                p2:
                    "As part of my current project, I work on scheduling and routing algorithms for logistics operations. My previous research focused on passive localisation, where I developed and analysed geometric algorithms for locating vehicles using passive sensors."

            },

            themes: {

                title: "Research Themes",

                optimization_title: "Optimization Algorithms. ",
                optimization:
                    "Designing exact, approximation and heuristic algorithms for challenging optimization problems.",

                complexity_title: "Computational Complexity. ",
                complexity:
                    "Understanding the computational limits of optimization problems and identifying when efficient algorithms are possible.",

                decision_title: "Decision Making. ",
                decision:
                    "Developing optimization models and mixed-integer linear programming (MILP) formulations that support autonomous decision making.",

                autonomous_title: "Autonomous Systems. ",
                autonomous:
                    "Studying how local decisions influence the global behaviour of fleets of autonomous vehicles through mathematical modelling and simulation.",

                engineering_title: "Algorithm Engineering. ",
                engineering:
                    "Bridging theoretical guarantees with practical implementations for real-world applications in transportation and logistics."

            },

            motivation: {

                title: "Why This Research?",

                p1:
                    "Many real-world optimization problems are computationally difficult, making exact solutions impractical for large instances. My research explores how approximation algorithms, mathematical optimization, and efficient algorithm design can produce solutions that are both theoretically sound and practically useful.",

                p2:
                    "I am particularly interested in understanding how algorithmic decisions affect the behaviour of autonomous systems. By combining optimization, simulation, and complexity theory, I aim to design decision-making methods whose observed behaviour closely matches their intended objectives."

            },

            education: {

                title: "Education",

                phd:
                    "Ph.D. in Computer Science",

                phd_place:
                    "University of Liverpool (2019–2024)",

                thesis_label:
                    "Thesis:",

                thesis:
                    "A Study of a Geometric Framework in Passive Localisation",

                diploma:
                    "Diploma in Applied Mathematics and Physical Sciences",

                diploma_place:
                    "National Technical University of Athens"

            },

            topics: {

                title: "Selected Topics",

                approximation: "Approximation Algorithms",

                parameterized: "Parameterized Complexity",

                optimization: "Optimization Algorithms",

                geometry: "Computational Geometry",

                decision: "Decision Making",

                milp: "Mixed-Integer Linear Programming (MILP)",

                scheduling: "Scheduling and Routing",

                autonomous: "Autonomous Vehicles",

                simulation: "Simulation and Emergent Behaviour"

            }

        },
        about: {

            timeline: {

                title: "Academic Journey",

                hs_title: "High School Graduation",

                hs_desc: "High School of Kremasti, Rhodes, Greece.",

                ntua_title: "National Technical University of Athens",

                ntua_desc:
                    "Diploma in Applied Mathematics and Physical Sciences",

                liv_title: "University of Liverpool",

                liv_desc:
                    "PhD in Computer Science, School of Electrical Engineering, Electronics and Computer Science",

                tuc_title: "Technical University of Crete",

                tuc_desc:
                    "Postdoctoral Researcher, School of Production Engineering and Management"

            },
            mathematics: {

                title: "Why Mathematics?",

                p1:
                    "Mathematics attracted me because of its creative nature. Solving a problem begins by creating an appropriate framework in which the problem can be precisely described. Once the right formulation has been found, discovering a solution becomes an engaging logical puzzle. In many cases, finding a proper problem definition is already halfway to solving it.",

                p2:
                    "Bertrand Russell beautifully expressed this idea:",

                quote:
                    "\"The pure mathematician, like the musician, is a free creator of his world of ordered beauty.\""

            },
            algorithms: {

                title: "Why Algorithms?",

                p1:
                    "What fascinates me about algorithms is their generality. While a mathematical formula may solve one specific problem, an algorithm provides a systematic method capable of solving an entire family of problem instances.",

                p2:
                    "Algorithms also represent the language through which we teach machines to solve problems. Designing an algorithm means describing a sequence of logical decisions that transforms mathematical ideas into practical computation."

            },
            decision: {

                title: "Decision Making and Optimization",

                p1:
                    "Many optimization problems can be viewed as a single decision: given a model, a set " +
                    "of constraints, and an objective function, the goal is to determine the best possible " +
                    "solution. Advances in mathematical optimization and mixed-integer linear " +
                    "programming (MILP) have made it possible to solve many such problems efficiently " +
                    "and with strong theoretical guarantees.",

                p2:
                    "However, many real-world systems are inherently dynamic. Rather than making one " +
                    "decision in isolation, they require a sequence of decisions over time, where each " +
                    "choice changes the state of the system and influences the decisions that follow. " +
                    "Examples include autonomous vehicles, logistics operations, and multi-agent " +
                    "systems, where today's decision shapes tomorrow's opportunities.",

                p3:
                    "My research is motivated by understanding this distinction. I am interested in " +
                    "identifying when a dynamic decision-making process can be formulated as a single " +
                    "optimization problem and when it fundamentally requires reasoning about the " +
                    "evolution of the system over time. Answering this question involves developing new " +
                    "algorithmic frameworks, studying their computational complexity, and designing " +
                    "efficient methods that produce high-quality decisions while accounting for their " +
                    "long-term consequences."

            },
            philosophy: {

                title: "Research Philosophy",

                p1:
                    "I enjoy working where theory meets applications. " +
                    "Theoretical computer science provides elegant mathematical tools, " +
                    "while practical applications continually introduce new questions " +
                    "that inspire theoretical advances.",

                p2:
                    "I particularly value collaboration across disciplines. " +
                    "Many of today's challenging optimization problems require expertise " +
                    "from mathematics, computer science, engineering, and operations " +
                    "research, and I believe that meaningful progress often comes from " +
                    "combining different perspectives.",


            },
            awards: {

                title: "Awards & Achievements",

                scholarship:
                    "Fully funded doctoral scholarship at the Centre for Doctoral Training " +
                    "in Distributed Algorithms, University of Liverpool.",

                bctcs:
                    "Awarded funding to present research at the 38th British Colloquium for Theoretical " +
                    "Computer Science.",

                ciuk:
                    "Second place at the Computing Insight UK Student Cluster Challenge (CIUK), representing " +
                    "the University of Liverpool in a national High-Performance Computing competition."

            },
            skills: {

                title: "Technical Skills",

                programming: "Programming",

                scientific: "Scientific Computing",

                web: "Web & Documents",

            },
            languages: {

                title: "Languages",

                greek: "Greek",

                greek_level: "Native Speaker",

                english: "English",

                english_level:
                    "Fluent (Michigan ECPE Certificate of Proficiency)"

            },
            acknowledgements: {

                title: "Αcknowledgements",

                p1:
                    "I am grateful to God for the opportunities I have been given to study, " +
                    "teach, and conduct research. I hope that my work contributes, " +
                    "however modestly, to the pursuit of truth, to the service of others, " +
                    "and ultimately to the glory of God. \n\n " +

                    "I am equally thankful to my teachers, mentors, collaborators, friends, " + 
                    "and family, whose encouragement and guidance have shaped both my academic  " +
                    "journey and my personal life. ",

                quote:
                    "\"Whatever you do, do all to the glory of God.\"",

                author:
                    "— 1 Corinthians 10:31",

                closing:
                    "Δόξα τῷ Θεῷ πάντων ἕνεκεν — Glory to God for all things."

            },
        },
        publications: {
            thesis_heading:
                "PhD Thesis",
            journal_heading:
                "Journal Publications",
            conference_heading:
                "Conference Publications",
            deliverable_heading:
                "Project Deliverables & Technical Reports"
        },
        projects:{

            trace:{
                text1: "Postdoctoral Researcher at the ", 
                lab: "Dynamic Systems and Simulation Laboratory (DSSL)", 
                text2: ", ", 
                inst: "Technical University of Crete", 
                text3: " working on the Horizon Europe Innovation Action ", 
                text4: 
                    "(Grant Agreement No. 101104278). " +
                    "My research focuses on optimization methods for logistics, with emphasis on optimal " +
                    "scheduling and routing. As Task Leader for Platform Development Modules, I coordinate the development  " +
                    "and integration of optimization services and lead the collaboration of the project's technical " +
                    "partners in this area. "
            },
            rf_sensors:{
                text1: 
                    "PhD Researcher at the University of Liverpool, working on the EPSRC-funded research project " + 
                    "\"Exploration and Exploitation with Passive RF Sensors\" (Grant EP/S023445/1) within the ",

                text2:
                    "The project was conducted in collaboration with MBDA UK, focusing on algorithmic approaches " +
                    "to passive localisation and autonomous sensing systems."
            }
        },
        teaching: {
            liverpool_title: "Tutor at the University of Liverpool (2020 - 2023)"
        }

    },

    el: {

        nav: {

            home: "Αρχική",
            about: "Σχετικά",
            publications: "Δημοσιεύσεις",
            projects: "Έργα",
            teaching: "Διδασκαλία",
            cv: "Βιογραφικό"

        },

        home: {

            hero: {

                name: "Θεόφιλος Τριομμάτης",

                position: "Μεταδιδακτορικός Ερευνητής",

                institution: "Πολυτεχνείο Κρήτης",

                lab: "Εργαστήριο Δυναμικών Συστημάτων και Προσομοίωσης",

                address: "Πανεπιστημιούπολη Πολυτεχνείου Κρήτης",

                address_code: "Χανιά 73100, Ελλάδα",

                tel: "Τηλ. +30 28210 37289",

                email: "Ηλ. Ταχυδρομείο",

                mail_at: "παπάκι",

                mail_dot: "τελεία"

            },

            welcome: {

                title: "Καλώς ήρθατε στην προσωπική μου ιστοσελίδα!",

                text1:
                    "Είμαι μεταδιδακτορικός ερευνητής στο", 
                
                text2: 
                    "του", 
                
                text3: 
                    "Η έρευνά μου βρίσκεται στη διασταύρωση του σχεδιασμού αλγορίθμων, της βελτιστοποίησης και της λήψης αποφάσεων. Αναπτύσσω αποδοτικούς αλγορίθμους που βοηθούν αυτόνομα συστήματα να λαμβάνουν καλύτερες αποφάσεις, ενώ παράλληλα μελετώ τα θεωρητικά όρια επίλυσης σύνθετων προβλημάτων βελτιστοποίησης. Με ενδιαφέρει να γεφυρώνω τη μαθηματική θεωρία με πρακτικές εφαρμογές, σχεδιάζοντας αλγορίθμους που είναι τόσο θεωρητικά τεκμηριωμένοι όσο και χρήσιμοι στην πράξη."

            },

            current_research: {

                title: "Τρέχουσα Έρευνα",

                p1:
                    "Η τρέχουσα έρευνά μου εξετάζει μηχανισμούς λήψης αποφάσεων για προβλήματα βελτιστοποίησης που προκύπτουν σε αυτόνομα συστήματα εφοδιαστικής αλυσίδας. Μελετώ πώς αλγόριθμοι βελτιστοποίησης μπορούν να χρησιμοποιηθούν για τον προσδιορισμό βέλτιστων ή σχεδόν βέλτιστων αποφάσεων για μη επανδρωμένα οχήματα που λειτουργούν σε δυναμικά περιβάλλοντα.",

                p2:
                    "Στο πλαίσιο του τρέχοντος έργου μου εργάζομαι πάνω σε αλγορίθμους προγραμματισμού και δρομολόγησης για λειτουργίες logistics. Η προηγούμενη έρευνά μου επικεντρώθηκε στην παθητική εντόπιση θέσης, όπου ανέπτυξα και ανέλυσα γεωμετρικούς αλγορίθμους για τον εντοπισμό οχημάτων με χρήση παθητικών αισθητήρων."

            },

            themes: {

                title: "Ερευνητικά Θέματα",

                optimization_title: "Αλγόριθμοι Βελτιστοποίησης. ",
                optimization:
                    "Σχεδιασμός ακριβών, προσεγγιστικών και ευρετικών αλγορίθμων για δύσκολα προβλήματα βελτιστοποίησης.",

                complexity_title: "Υπολογιστική Πολυπλοκότητα. ",
                complexity:
                    "Μελέτη των υπολογιστικών ορίων προβλημάτων βελτιστοποίησης και αναγνώριση των περιπτώσεων όπου είναι δυνατοί αποδοτικοί αλγόριθμοι.",

                decision_title: "Έλεγχος Αποφάσεων. ",
                decision:
                    "Ανάπτυξη μοντέλων βελτιστοποίησης και διατυπώσεων μικτού ακέραιου γραμμικού προγραμματισμού (MILP) που υποστηρίζουν την αυτόνομη λήψη αποφάσεων.",

                autonomous_title: "Αυτόνομα Συστήματα. ",
                autonomous:
                    "Μελέτη του τρόπου με τον οποίο τοπικές αποφάσεις επηρεάζουν τη συνολική συμπεριφορά στόλων αυτόνομων οχημάτων μέσω μαθηματικής μοντελοποίησης και προσομοίωσης.",

                engineering_title: "Algorithm Engineering. ",
                engineering:
                    "Γεφύρωση θεωρητικών εγγυήσεων με πρακτικές υλοποιήσεις για εφαρμογές στις μεταφορές και τα logistics."

            },

            motivation: {

                title: "Γιατί αυτή η Έρευνα;",

                p1:
                    "Πολλά πραγματικά προβλήματα βελτιστοποίησης είναι υπολογιστικά δύσκολα, καθιστώντας τις ακριβείς λύσεις μη πρακτικές για μεγάλες περιπτώσεις. Η έρευνά μου εξερευνά πώς οι προσεγγιστικοί αλγόριθμοι, η μαθηματική βελτιστοποίηση και ο αποδοτικός σχεδιασμός αλγορίθμων μπορούν να παράγουν λύσεις που είναι τόσο θεωρητικά ορθές όσο και πρακτικά χρήσιμες.",

                p2:
                    "Με ενδιαφέρει ιδιαίτερα να κατανοήσω πώς οι αλγοριθμικές αποφάσεις επηρεάζουν τη συμπεριφορά αυτόνομων συστημάτων. Συνδυάζοντας βελτιστοποίηση, προσομοίωση και θεωρία υπολογιστικής πολυπλοκότητας, επιδιώκω να σχεδιάσω μεθόδους λήψης αποφάσεων των οποίων η παρατηρούμενη συμπεριφορά να ανταποκρίνεται στους αρχικούς στόχους τους."

            },

            education: {

                title: "Εκπαίδευση",

                phd:
                    "Διδακτορικό στην Επιστήμη Υπολογιστών",

                phd_place:
                    "Πανεπιστήμιο Λίβερπουλ (2019–2024)",

                thesis_label:
                    "Διδακτορική Διατριβή:",

                thesis:
                    "A Study of a Geometric Framework in Passive Localisation",

                diploma:
                    "Δίπλωμα Εφαρμοσμένων Μαθηματικών και Φυσικών Επιστημών",

                diploma_place:
                    "Εθνικό Μετσόβιο Πολυτεχνείο"

            },

            topics: {

                title: "Ενδεικτικά Θέματα",

                approximation: "Προσεγγιστικοί Αλγόριθμοι",

                parameterized: "Παραμετροποιημένη Πολυπλοκότητα",

                optimization: "Αλγόριθμοι Βελτιστοποίησης",

                geometry: "Υπολογιστική Γεωμετρία",

                decision: "Λήψη Αποφάσεων",

                milp: "Μικτός Ακέραιος Γραμμικός Προγραμματισμός (MILP)",

                scheduling: "Χρονοπρογραμματισμός και Δρομολόγηση",

                autonomous: "Αυτόνομα Οχήματα",

                simulation: "Προσομοίωση και Αναδυόμενη Συμπεριφορά"

            }

        },
        about: {
            timeline: {

                title: "Ακαδημαϊκή Πορεία",

                hs_title: "Αποφοίτηση από το Λύκειο",

                hs_desc:
                    "Γενικό Λύκειο Κρεμαστής, Ρόδος.",

                ntua_title:
                    "Εθνικό Μετσόβιο Πολυτεχνείο",

                ntua_desc:
                    "Δίπλωμα Εφαρμοσμένων Μαθηματικών και Φυσικών Επιστημών",

                liv_title:
                    "Πανεπιστήμιο του Λίβερπουλ",

                liv_desc:
                    "Διδακτορικό στην Επιστήμη Υπολογιστών, Σχολή Ηλεκτρολόγων Μηχανικών, Ηλεκτρονικής και Επιστήμης Υπολογιστών",

                tuc_title:
                    "Πολυτεχνείο Κρήτης",

                tuc_desc:
                    "Μεταδιδακτορικός Ερευνητής, Σχολή Μηχανικών Παραγωγής και Διοίκησης"

            },
            mathematics: {

                title: "Γιατί τα Μαθηματικά;",

                p1:
                    "Τα μαθηματικά με γοήτευσαν λόγω της δημιουργικής τους φύσης. Η επίλυση ενός προβλήματος ξεκινά από τη διαμόρφωση ενός κατάλληλου πλαισίου μέσα στο οποίο το πρόβλημα μπορεί να περιγραφεί με ακρίβεια. Μόλις βρεθεί η σωστή διατύπωση, η αναζήτηση της λύσης μετατρέπεται σε ένα συναρπαστικό λογικό παζλ. Συχνά, η σωστή διατύπωση του προβλήματος αποτελεί ήδη το ήμισυ της λύσης.",

                p2:
                    "Ο Bertrand Russell το εξέφρασε εύστοχα:",

                quote:
                    "«Ο μαθηματικός, όπως και ο μουσικός, είναι ένας ελεύθερος δημιουργός του δικού του κόσμου, ενός κόσμου αρμονίας και ομορφιάς.»"

            },
            algorithms: {

                title: "Γιατί οι Αλγόριθμοι;",

                p1:
                    "Αυτό που με συναρπάζει στους αλγορίθμους είναι η γενικότητά τους. " +
                    "Ενώ ένας μαθηματικός τύπος μπορεί να επιλύει μία συγκεκριμένη περίπτωση, " +
                    "ένας αλγόριθμος περιγράφει μια συστηματική διαδικασία που μπορεί να επιλύσει " +
                    "ολόκληρη μια οικογένεια προβλημάτων.",

                p2:
                    "Οι αλγόριθμοι αποτελούν επίσης τη γλώσσα μέσω της οποίας διδάσκουμε " +
                    "τις μηχανές να επιλύουν προβλήματα. Ο σχεδιασμός ενός αλγορίθμου σημαίνει " +
                    "τη μετατροπή μιας μαθηματικής ιδέας σε μια ακολουθία λογικών αποφάσεων, " +
                    "ικανή να υλοποιηθεί υπολογιστικά."

            },
            decision: {

                title: "Λήψη Αποφάσεων και Βελτιστοποίηση",

                p1:
                    "Πολλά προβλήματα βελτιστοποίησης μπορούν να αντιμετωπιστούν ως μία μοναδική " +
                    "απόφαση: δεδομένου ενός μοντέλου, ενός συνόλου περιορισμών και μιας αντικειμενικής " +
                    "συνάρτησης, στόχος είναι ο προσδιορισμός της βέλτιστης λύσης. Οι εξελίξεις στη " +
                    "μαθηματική βελτιστοποίηση και στον μικτό ακέραιο γραμμικό προγραμματισμό (MILP) " +
                    "καθιστούν δυνατή την αποδοτική επίλυση πολλών τέτοιων προβλημάτων.",

                p2:
                    "Ωστόσο, πολλά πραγματικά συστήματα είναι δυναμικά. Αντί για μία μόνο απόφαση, " +
                    "απαιτούν μια ακολουθία αποφάσεων στον χρόνο, όπου κάθε επιλογή μεταβάλλει την " +
                    "κατάσταση του συστήματος και επηρεάζει τις αποφάσεις που ακολουθούν. Παραδείγματα " +
                    "αποτελούν τα αυτόνομα οχήματα, οι λειτουργίες εφοδιαστικής αλυσίδας και τα " +
                    "πολυπρακτορικά συστήματα, όπου η σημερινή απόφαση διαμορφώνει τις δυνατότητες " +
                    "του αύριο.",

                p3:
                    "Η έρευνά μου επικεντρώνεται στη διάκριση αυτών των δύο κατηγοριών προβλημάτων. " +
                    "Με ενδιαφέρει να κατανοήσω πότε μια διαδικασία λήψης αποφάσεων μπορεί να " +
                    "διατυπωθεί ως ένα ενιαίο πρόβλημα βελτιστοποίησης και πότε απαιτείται η " +
                    "μελέτη της εξέλιξης του συστήματος στον χρόνο. Η απάντηση σε αυτό το ερώτημα " +
                    "προϋποθέτει την ανάπτυξη νέων αλγοριθμικών πλαισίων, τη μελέτη της υπολογιστικής " +
                    "τους πολυπλοκότητας και τον σχεδιασμό αποδοτικών μεθόδων που λαμβάνουν αποφάσεις " +
                    "υψηλής ποιότητας, λαμβάνοντας υπόψη τις μακροπρόθεσμες συνέπειές τους."

            },
            philosophy: {

                title: "Νοοτροπία Έρευνας",

                p1:
                    "Μου αρέσει να εργάζομαι στο σημείο όπου η θεωρία συναντά την πράξη. " +
                    "Η Θεωρητική Επιστήμη Υπολογιστών προσφέρει κομψά μαθηματικά εργαλεία, " +
                    "ενώ οι εφαρμογές του πραγματικού κόσμου γεννούν νέα ερωτήματα που " +
                    "οδηγούν σε περαιτέρω θεωρηκή πρόοδο.",

                p2:
                    "Παράλληλα, θεωρώ ιδιαίτερα σημαντική τη συνεργασία μεταξύ διαφορετικών " +
                    "επιστημονικών πεδίων. Πολλά από τα σύγχρονα προβλήματα βελτιστοποίησης " +
                    "απαιτούν γνώσεις μαθηματικών, πληροφορικής, μηχανικής και επιχειρησιακής " +
                    "έρευνας· πιστεύω ότι η ουσιαστική πρόοδος προκύπτει μέσα από τη σύνθεση " +
                    "διαφορετικών ιδεών και προσεγγίσεων."

            },
            awards: {

                title: "Διακρίσεις",

                scholarship:
                    "Πλήρης υποτροφία διδακτορικών σπουδών στο Centre for Doctoral Training in Distributed Algorithms του Πανεπιστημίου του Liverpool.",

                bctcs:
                    "Χρηματοδότηση για την παρουσίαση ερευνητικής εργασίας στο 38ο British Colloquium for Theoretical Computer Science.",

                ciuk:
                    "Δεύτερη θέση στον εθνικό διαγωνισμό Υπολογιστικής Υψηλών Επιδόσεων (Computing Insight UK Student Cluster Challenge – CIUK), εκπροσωπώντας το Πανεπιστήμιο του Liverpool."

            },
            skills: {

                title: "Τεχνικές Δεξιότητες",

                programming: "Προγραμματισμός",

                scientific: "Επιστημονικός Υπολογισμός",

                web: "Ιστός & Έγγραφα",

            },
            languages: {

                title: "Γλώσσες",

                greek: "Ελληνικά",

                greek_level: "Μητρική γλώσσα",

                english: "Αγγλικά",

                english_level:
                    "Άριστη γνώση (Certificate of Proficiency – Michigan ECPE)"

            },
            acknowledgements: {

                title: "Ευχαριστίες",

                p1:
                    "Ευγνωμονώ τον Θεό για τις ευκαιρίες που μου έδωσε να σπουδάσω, " +
                    "να διδάξω και να ασχοληθώ με την έρευνα. Εύχομαι το έργο μου, όσο " +
                    "μικρή κι αν είναι η συνεισφορά του, να υπηρετεί την αναζήτηση της " +
                    "αλήθειας, να ωφελεί τους ανθρώπους και, πάνω απ' όλα, να δοξάζει τον Θεό.\n\n" +

                    "Είμαι επίσης βαθιά ευγνώμων προς τους δασκάλους, τους μέντορες, " +
                    "τους συνεργάτες, τους φίλους και την οικογένειά μου, των οποίων η " +
                    "στήριξη, η καθοδήγηση και η αγάπη διαμόρφωσαν τόσο την ακαδημαϊκή " +
                    "πορεία όσο και την προσωπική μου ζωή.",

                quote:
                    "«…πάντα εἰς δόξαν Θεοῦ ποιεῖτε.»",

                author:
                    "— Α΄ Κορινθίους 10:31",

                closing:
                    "Δόξα τῷ Θεῷ πάντων ἕνεκεν."

            },
        },
        publications: {
            thesis_heading:
                "Διδακτορική Διατριβή",
            journal_heading:
                "Δημοσιεύσεις σε Επιστημονικά Περιοδικά",
            conference_heading:
                "Δημοσιεύσεις σε Συνέδρια",
            deliverable_heading:
                "Παραδοτέα Ερευνητικών Έργων και Τεχνικές Αναφορές"
        },
        projects:{
            trace:{
                text1: "Μεταδιδακτορικός Ερευνητής στο", 
                lab: "Εργαστήριο Δυναμικών Συστημάτων και Προσομοίωσης (DSSL)", 
                text2: " του ", 
                inst: "Πολυτεχνείου Κρήτης", 
                text3: ", συμμετέχοντας στο έργο καινοτομίας του προγράμματος Horizon Europe, ", 
                text4: 
                    "(Grant Agreement No. 101104278). " +
                    "Η έρευνά μου επικεντρώνεται στην ανάπτυξη μεθόδων βέλτιστων αποφάσεων σε μεταφορές / εφοδιασμό (logistics), " +
                    "με έμφαση στα προβλήματα δρομολόγησης και προγραμματισμού. Στο πλαίσιο του έργου, " +
                    "έχω τον ρόλο του Υπεύθυνου Εργασίας (Task Leader) για τις Ενότητες Ανάπτυξης της Πλατφόρμας, συντονίζοντας " +
                    "την ανάπτυξη και την υλοποίηση των υπηρεσιών λήψης βέλτιστων αποφάσεων, καθώς και τη συνεργασία των τεχνικών εταίρων " +
                    "του έργου στον συγκεκριμένο τομέα."
            },
            rf_sensors:{
                text1:
                    "Υποψήφιος Διδάκτορας στο Πανεπιστήμιο του Λίβερπουλ, στο πλαίσιο του ερευνητικού έργου " +
                    "«Exploration and Exploitation with Passive RF Sensors», το οποίο υλοποιήθηκε στο ",
                text2:
                    "Το έργο χρηματοδοτήθηκε από το Engineering and Physical Sciences Research Council " +
                    "(EPSRC, Grant EP/S023445/1) του Ηνωμένου Βασιλείου και πραγματοποιήθηκε σε συνεργασία με τη " +
                    "MBDA UK."
            }
        },
        teaching: {
            liverpool_title: "Βοηθός Διδασκαλίας στο Πανεπιστήμιο του Λίβερπουλ (2020–2023)"
        }

    }

};