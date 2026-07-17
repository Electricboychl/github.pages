document.addEventListener("DOMContentLoaded", () => {
    // === 1. Animación de Corazones Flotantes de Fondo ===
    const container = document.getElementById("heart-container");
    const numberOfHearts = 20; // Reducido para mejor performance en móviles
    const heartTypes = ["🩵", "🤍", "✨", "🌸", "☁️"];

    for (let i = 0; i < numberOfHearts; i++) {
        createFloatingHeart();
    }

    function createFloatingHeart() {
        if (!container) return;
        const heart = document.createElement("div");
        heart.classList.add("heart");

        // Elegir un tipo de corazón/emoji aleatorio
        heart.innerText = heartTypes[Math.floor(Math.random() * heartTypes.length)];

        // Posición horizontal y vertical inicial aleatoria
        heart.style.left = Math.random() * 100 + "vw";

        // Duración aleatoria (entre 10s y 20s)
        const duration = Math.random() * 10 + 10;
        heart.style.animationDuration = duration + "s";

        // Retraso aleatorio
        heart.style.animationDelay = Math.random() * 10 + "s";

        // Tamaño aleatorio (entre 18px y 38px)
        heart.style.fontSize = Math.random() * 20 + 18 + "px";

        container.appendChild(heart);

        // Cuando la animación termine, eliminar y recrear
        setTimeout(() => {
            heart.remove();
            createFloatingHeart();
        }, (duration + 10) * 1000);
    }

    // === 2. Explosión de Corazones al Hacer Clic ===
    const clickHeartTypes = ["🩵", "🩷", "❤️", "💖", "💝", "✨", "🌸", "💕"];

    document.addEventListener("click", (e) => {
        // No activar si hacemos clic en elementos interactivos como botones o sliders
        if (e.target.closest("input") || e.target.closest("a") || e.target.closest(".lang-bubble") || e.target.closest("button")) {
            return;
        }
        triggerBurst(e.clientX, e.clientY);
    });

    function triggerBurst(x, y) {
        const burstCount = 10; // Cantidad de corazones por explosión

        for (let i = 0; i < burstCount; i++) {
            const h = document.createElement("div");
            h.classList.add("click-heart");
            h.innerText = clickHeartTypes[Math.floor(Math.random() * clickHeartTypes.length)];

            // Ubicar en el cursor
            h.style.left = `${x + window.scrollX}px`;
            h.style.top = `${y + window.scrollY}px`;

            // Ángulo aleatorio para la dirección de explosión
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 120 + 50; // Distancia del vuelo

            // Destinos finales calculados para las variables CSS
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance - 30; // Tendencia a subir levemente
            const rot = Math.random() * 180 - 90;
            const scale = Math.random() * 1.2 + 0.6;

            h.style.setProperty("--tx", `${tx}px`);
            h.style.setProperty("--ty", `${ty}px`);
            h.style.setProperty("--rot", `${rot}deg`);
            h.style.setProperty("--scale", scale);

            document.body.appendChild(h);

            // Eliminar después de que termine la animación
            setTimeout(() => {
                h.remove();
            }, 800);
        }
    }

    // === 3. Sección "Te Amo en todos los idiomas" ===
    const languages = [
        { phrase: "Te amo", lang: "Español", emoji: "🇪🇸" },
        { phrase: "I love you", lang: "Inglés", emoji: "🇺🇸" },
        { phrase: "Je t'aime", lang: "Francés", emoji: "🇫🇷" },
        { phrase: "Ti amo", lang: "Italiano", emoji: "🇮🇹" },
        { phrase: "Eu te amo", lang: "Portugués", emoji: "🇧🇷" },
        { phrase: "Ich liebe dich", lang: "Alemán", emoji: "🇩🇪" },
        { phrase: "Aishiteru (愛してる)", lang: "Japonés", emoji: "🇯🇵" },
        { phrase: "Saranghae (사랑해)", lang: "Coreano", emoji: "🇰🇷" },
        { phrase: "Wo ai ni (我爱你)", lang: "Chino", emoji: "🇨🇳" },
        { phrase: "Ya tebya lyublyu (Я тебя люблю)", lang: "Ruso", emoji: "🇷🇺" },
        { phrase: "Ahbak (أحبك)", lang: "Árabe", emoji: "🇸🇦" },
        { phrase: "S'agapo (Σ' αγαπώ)", lang: "Griego", emoji: "🇬🇷" },
        { phrase: "Ik hou van jou", lang: "Holandés", emoji: "🇳🇱" },
        { phrase: "Jag älskar dig", lang: "Sueco", emoji: "🇸🇪" },
        { phrase: "Seni seviyorum", lang: "Turco", emoji: "🇹🇷" },
        { phrase: "Kocham cię", lang: "Polaco", emoji: "🇵🇱" },
        { phrase: "Te iubesc", lang: "Rumano", emoji: "🇷🇴" },
        { phrase: "T'estimo", lang: "Catalán", emoji: "🇪🇸" },
        { phrase: "Aloha wau ia 'oe", lang: "Hawaiano", emoji: "🌺" },
        { phrase: "Mahal kita", lang: "Tagalo", emoji: "🇵🇭" }
    ];

    const languagesGrid = document.getElementById("languagesGrid");
    const translationPhrase = document.getElementById("translationPhrase");
    const translationLang = document.getElementById("translationLang");

    if (languagesGrid && translationPhrase && translationLang) {
        languages.forEach(item => {
            const bubble = document.createElement("div");
            bubble.classList.add("lang-bubble");
            bubble.innerText = `${item.emoji} ${item.lang}`;

            bubble.addEventListener("click", (e) => {
                // Cambiar el texto destacado con animación suave
                translationPhrase.style.animation = "none";
                // Forzar reflujo para reiniciar animación
                void translationPhrase.offsetWidth;
                translationPhrase.innerText = item.phrase;
                translationPhrase.style.animation = "popText 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)";

                translationLang.innerText = item.lang;

                // Generar explosión de corazones en la burbuja cliqueada
                const rect = bubble.getBoundingClientRect();
                triggerBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);
            });

            languagesGrid.appendChild(bubble);
        });
    }

    // === 4. Medidor de Amor Interactivo ===
    const loveSlider = document.getElementById("loveSlider");
    const loveMessage = document.getElementById("loveMessage");

    const loveQuotes = [
        { limit: 10, text: "Oye... ¡Eso es muy poquito! Desliza más hacia la derecha 🥺" },
        { limit: 25, text: "Te amo bastante, ¡pero sé que podemos subir esa barrita! 😉🩵" },
        { limit: 45, text: "¡Muchísimo! Más que a las mañanas tranquilas de café ☕✨" },
        { limit: 65, text: "¡Del tamaño del océano y del cielo juntos! 🌊✈️" },
        { limit: 85, text: "¡Hasta la luna ida y vuelta mil veces! 🌙🚀" },
        { limit: 99, text: "¡Tanto que no cabe en el planeta entero! Eres mi sol 🌎☀️" },
        { limit: 100, text: "¡AMOR INFINITO! Eres todo mi universo, mi principio y mi fin 🌌🩵" }
    ];

    if (loveSlider && loveMessage) {
        const updateLoveMessage = (value) => {
            const numVal = parseInt(value);
            const matchedQuote = loveQuotes.find(q => numVal <= q.limit) || loveQuotes[loveQuotes.length - 1];

            // Actualizar mensaje
            loveMessage.innerText = matchedQuote.text;

            // Si llega a 100, gatillar una explosión festiva de corazones en el centro
            if (numVal === 100) {
                const sliderRect = loveSlider.getBoundingClientRect();
                triggerBurst(sliderRect.left + sliderRect.width / 2, sliderRect.top);
            }
        };

        // Escuchar cambios del slider
        loveSlider.addEventListener("input", (e) => {
            updateLoveMessage(e.target.value);
        });

        // Inicializar mensaje por defecto
        updateLoveMessage(loveSlider.value);
    }

    // === 5. Mini Reproductor de Música ===
    const miniPlayer = document.getElementById("miniPlayer");
    const bgMusic = document.getElementById("bgMusic");
    const btnPlayPause = document.getElementById("btnPlayPause");
    const playIcon = document.getElementById("playIcon");
    const progressBar = document.getElementById("progressBar");
    const progressContainer = document.getElementById("progressContainer");
    const playerTooltip = document.getElementById("playerTooltip");

    if (miniPlayer && bgMusic && btnPlayPause && progressBar && progressContainer) {
        // Toggle play/pause
        btnPlayPause.addEventListener("click", () => {
            if (bgMusic.paused) {
                bgMusic.play().then(() => {
                    miniPlayer.classList.add("playing");
                    // Cambiar icono a pause
                    playIcon.innerHTML = `
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                        </svg>
                    `;
                    // Ocultar tooltip con transición
                    if (playerTooltip) {
                        playerTooltip.style.transition = "opacity 0.5s ease";
                        playerTooltip.style.opacity = "0";
                        setTimeout(() => playerTooltip.remove(), 500);
                    }
                }).catch(err => {
                    console.log("El navegador bloqueó la reproducción automática: ", err);
                });
            } else {
                bgMusic.pause();
                miniPlayer.classList.remove("playing");
                // Cambiar icono a play
                playIcon.innerHTML = `
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                `;
            }
        });

        // Actualizar barra de progreso
        bgMusic.addEventListener("timeupdate", () => {
            if (bgMusic.duration) {
                const percentage = (bgMusic.currentTime / bgMusic.duration) * 100;
                progressBar.style.width = `${percentage}%`;
            }
        });

        // Controlar click en barra de progreso para adelantar/retroceder
        progressContainer.addEventListener("click", (e) => {
            const rect = progressContainer.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const width = rect.width;
            const percentage = clickX / width;
            if (bgMusic.duration) {
                bgMusic.currentTime = percentage * bgMusic.duration;
            }
        });

        // === 6. Animación de la Caja Secreta (Cofre) ===
        const secretBox = document.getElementById("secretBox");
        const secretMessage = document.getElementById("secretMessage");

        if (secretBox && secretMessage) {
            secretBox.addEventListener("click", () => {
                // 1. Agrega la clase que activa la animación CSS de la tapa
                secretBox.classList.add("open");

                // 2. Quita el "display: none" para que el div pueda renderizarse en pantalla
                secretMessage.style.display = "block";

                // 3. Aplica la clase 'show' con un micro-retraso para que la transición de opacidad funcione
                setTimeout(() => {
                    secretMessage.classList.add("show");
                }, 50);

                // Opcional: Generar la explosión de corazones que ya tienes programada al abrir el cofre
                const rect = secretBox.getBoundingClientRect();
                triggerBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);
            });
        }
    }

    // === 7. Efecto de "Te quiero" Infinito ===
    const infiniteContainer = document.getElementById("infiniteContainer");

    if (infiniteContainer) {
        // Función para agregar un bloque de mensajes
        const addMoreLove = () => {
            // Agrega 5 mensajes por cada vez que llegamos al final
            for (let i = 0; i < 5; i++) {
                const message = document.createElement("p");
                message.classList.add("infinite-text");
                // Puedes variar el texto ligeramente si quieres
                message.innerText = "Te quiero 🩵";
                infiniteContainer.appendChild(message);
            }
        };

        // Llenar un par de veces para empezar
        addMoreLove();
        addMoreLove();

        // Escuchar el evento de scroll en la ventana
        window.addEventListener("scroll", () => {
            // Calcular si el usuario está cerca del final de la página (a unos 150px)
            const scrollPosition = window.innerHeight + window.scrollY;
            const threshold = document.body.offsetHeight - 150;

            if (scrollPosition >= threshold) {
                addMoreLove();
            }
        });
    }

    // === 8. Guardar Respuesta en CSV y Botón "No" Escurridizo ===
    const btnSi = document.getElementById("btnSi");
    const btnNo = document.getElementById("btnNo");
    const seccionPregunta = document.getElementById("pregunta-final");

    // Contador de intentos para el botón No
    let intentosNo = 0;

    function generarYDescargarCSV(respuesta) {
        const cabecera = "\uFEFFPregunta,Respuesta,Fecha\n";
        const fila = `"¿Quieres vivir el resto de tu vida conmigo?","${respuesta}","${new Date().toLocaleString()}"`;
        const contenidoCSV = cabecera + fila;

        const blob = new Blob([contenidoCSV], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", "Respuesta_Maria.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    if (btnSi) {
        btnSi.addEventListener("click", () => {
            generarYDescargarCSV("Sí, quiero 🩵");

            // Explosión masiva de corazones si dice que sí
            if (seccionPregunta) {
                const rect = seccionPregunta.getBoundingClientRect();
                let count = 0;
                const intervalo = setInterval(() => {
                    triggerBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);
                    count++;
                    if (count > 8) clearInterval(intervalo);
                }, 300);
            }

            setTimeout(() => {
                alert("¡Me has hecho el hombre más feliz del mundo! Tu respuesta se ha guardado. 🩵");
            }, 800);
        });
    }

    if (btnNo) {
        // Función para mover el botón aleatoriamente
        const moverBoton = (e) => {
            if (intentosNo < 2) {
                intentosNo++;

                // Cambiar a fixed para que se mueva por toda la pantalla
                btnNo.style.position = "fixed";

                // Calcular dimensiones seguras de la pantalla
                const maxX = window.innerWidth - btnNo.offsetWidth - 20;
                const maxY = window.innerHeight - btnNo.offsetHeight - 20;

                // Generar posición aleatoria
                const randomX = Math.max(20, Math.floor(Math.random() * maxX));
                const randomY = Math.max(20, Math.floor(Math.random() * maxY));

                btnNo.style.left = randomX + "px";
                btnNo.style.top = randomY + "px";
                btnNo.style.zIndex = "9999";

                // Prevenir el click en caso de móviles
                if (e) e.preventDefault();
            }
        };

        // Evento para escritorio (cuando el mouse entra al botón)
        btnNo.addEventListener("mouseenter", moverBoton);

        // Evento para móviles (cuando el dedo toca el botón)
        btnNo.addEventListener("touchstart", (e) => {
            if (intentosNo < 2) moverBoton(e);
        });

        // Evento click (Solo funcionará si ya pasaron los 2 primeros intentos)
        btnNo.addEventListener("click", (e) => {
            if (intentosNo < 2) {
                moverBoton(e); // Por si acaso logra darle click de alguna forma muy rápida
            } else {
                // Al tercer intento sí funciona
                generarYDescargarCSV("No :("); // Guarda el CSV con el No
                setTimeout(() => {
                    alert("okey, entiendo :(");
                }, 300);
            }
        });
    }
});
