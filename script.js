/* script.js */
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const mensaje = document.getElementById("mensaje").value;
        
        if (nombre && email && mensaje) {
            alert("Gracias, " + nombre + ". Tu mensaje ha sido enviado correctamente.");
            form.reset();
        } else {
            alert("Por favor, completa todos los campos antes de enviar.");
        }
    });
});
