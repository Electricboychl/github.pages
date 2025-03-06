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
});
