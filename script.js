document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("heart-container");
    const numberOfHearts = 25; // Cantidad de corazones en pantalla

    // Generar corazones iniciales
    for (let i = 0; i < numberOfHearts; i++) {
        createHeart();
    }

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerText = "🩵";
        
        // Posición horizontal aleatoria
        heart.style.left = Math.random() * 100 + "vw";
        
        // Duración de la animación aleatoria (entre 8s y 18s)
        const duration = Math.random() * 10 + 8;
        heart.style.animationDuration = duration + "s";
        
        // Retraso de la animación aleatorio
        heart.style.animationDelay = Math.random() * 5 + "s";
        
        // Tamaño aleatorio (entre 15px y 40px)
        heart.style.fontSize = Math.random() * 25 + 15 + "px";

        container.appendChild(heart);

        // Cuando la animación termine, eliminar el corazón y crear uno nuevo
        setTimeout(() => {
            heart.remove();
            createHeart();
        }, (duration + 5) * 1000); // Se suma 5s por el delay máximo
    }
});
