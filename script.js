/* script.js */
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const mensaje = document.getElementById("mensaje").value;
        
        if (nombre && email && mensaje) {
            Swal.fire({
                title: "¡Mensaje enviado!",
                text: "Gracias, " + nombre + ". Nos pondremos en contacto contigo pronto.",
                icon: "success",
                confirmButtonText: "Aceptar"
            });
            form.reset();
        } else {
            Swal.fire({
                title: "Error",
                text: "Por favor, completa todos los campos antes de enviar.",
                icon: "error",
                confirmButtonText: "Aceptar"
            });
        }
    });

    // Animaciones con Intersection Observer
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });
    
    sections.forEach(section => {
        observer.observe(section);
    });

    // Efecto de desplazamiento suave en los enlaces del menú
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        });
    });
});


#contact-form button:hover {
    background: linear-gradient(135deg, #4e4376, #2b5876);
}
