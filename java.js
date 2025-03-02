document.addEventListener("DOMContentLoaded", function() {
    // Création du bouton pour le changement de thème
    const toggleThemeBtn = document.createElement("button");
    toggleThemeBtn.textContent = "🌙 Mode Sombre";
    toggleThemeBtn.style.position = "fixed";
    toggleThemeBtn.style.top = "20px";
    toggleThemeBtn.style.left = "20px";
    toggleThemeBtn.style.padding = "10px 20px";
    toggleThemeBtn.style.background = "#00c6ff";
    toggleThemeBtn.style.color = "#ffffff";
    toggleThemeBtn.style.border = "none";
    toggleThemeBtn.style.cursor = "pointer";
    toggleThemeBtn.style.borderRadius = "5px";
    toggleThemeBtn.style.fontSize = "1em";
    document.body.appendChild(toggleThemeBtn);

    // Vérifie l'état du mode sombre dans le localStorage et applique-le
    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
        toggleThemeBtn.textContent = "☀️ Mode Clair";
    }

    // Ajoute un événement au bouton pour changer le thème
    toggleThemeBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            toggleThemeBtn.textContent = "☀️ Mode Clair";
            localStorage.setItem("dark-mode", "enabled");
        } else {
            toggleThemeBtn.textContent = "🌙 Mode Sombre";
            localStorage.setItem("dark-mode", "disabled");
        }
    });

    // Sélectionne toutes les sections pour l'animation de défilement
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    });

    // Fonction pour révéler les sections lors du défilement
    function revealSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }

    // Ajoute un écouteur d'événement pour la fonction de défilement
    window.addEventListener("scroll", revealSections);

    // Appelle la fonction de révélation immédiatement pour les sections visibles
    revealSections();
});
