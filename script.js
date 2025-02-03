document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const themeToggle = document.getElementById("theme-toggle");
    
    // Cargar preferencia de modo desde localStorage
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
        themeToggle.textContent = "🌙 Modo Oscuro";
    } else {
        document.body.classList.remove("light-mode");
        themeToggle.textContent = "☀️ Modo Claro";
    }

    // Intersección para animaciones
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.2
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Cambio de tema
    themeToggle.addEventListener("click", function () {
        if (document.body.classList.contains("light-mode")) {
            document.body.classList.remove("light-mode");
            themeToggle.textContent = "☀️ Modo Claro";
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.add("light-mode");
            themeToggle.textContent = "🌙 Modo Oscuro";
            localStorage.setItem("theme", "light");
        }
    });
});
