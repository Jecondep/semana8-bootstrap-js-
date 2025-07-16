// Validación del formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let mensaje = document.getElementById('mensaje').value;

    if (!nombre || !email || !mensaje) {
        alert('Por favor, completa todos los campos obligatorios.');
        event.preventDefault(); // Evita el envío del formulario
    }
});

// Botón de alerta
document.getElementById('alertButton').addEventListener('click', function() {
    alert('¡Este es un mensaje de alerta personalizado!');
});
