document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById("theme-toggle");

  // Actualiza el contenido del botón según el modo actual
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
    document.querySelector('.container').style.transform = `translateY(${scrollPos * 0.1}px)`;
  });

  // Intentar reproducir el audio de fondo (puede estar bloqueado en algunos navegadores)
  const music = document.getElementById("background-music");
  if (music) {
    music.volume = 0.5;
    const playPromise = music.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log("Reproducción automática bloqueada:", error);
      });
    }
  }
});
