document.addEventListener("DOMContentLoaded", function() {
    // Partie 1 : Gestion du thème sombre/clair
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

    // Vérification du mode sombre stocké
    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
        toggleThemeBtn.textContent = "☀️ Mode Clair";
    }

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

    // Partie 2 : Animation des sections
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    });

    function revealSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections(); // Appel initial pour révéler les sections visibles dès le début
});
