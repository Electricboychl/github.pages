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

  // Intentar reproducir el audio (si el navegador lo permite)
  const music = document.getElementById("background-music");
  // En algunos navegadores puede ser necesario iniciar la reproducción tras una interacción del usuario.
  if (music) {
    music.volume = 0.5; // Ajusta el volumen si lo deseas (0.0 a 1.0)
    const playPromise = music.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        // Si la reproducción automática es bloqueada, puedes mostrar un mensaje o un botón para iniciar la reproducción
        console.log("La reproducción automática fue bloqueada:", error);
      });
    }
  }
});
