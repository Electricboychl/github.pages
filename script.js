document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById("theme-toggle");

  // Función para actualizar el texto y emoticón del botón según el modo actual
  function updateThemeButton() {
    if(document.body.classList.contains("light-mode")) {
      themeToggle.innerHTML = "🌞 Modo Claro";
    } else {
      themeToggle.innerHTML = "🌜 Modo Oscuro";
    }
  }

  // Evento para cambiar de tema
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    updateThemeButton();
  });

  // Efecto parallax: mueve ligeramente el contenedor a medida que se hace scroll
  window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;
    // Factor para el efecto parallax
    document.querySelector('.container').style.transform = `translateY(${scrollPos * 0.1}px)`;
  });
});
