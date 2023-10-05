// Obtener el formulario
const formulario = document.getElementById('miFormulario');

// Agregar un evento de escucha para el envío del formulario
formulario.addEventListener('submit', function (event) {
    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;

    // Validar si los campos "Nombre" y "Email" están vacíos
    if (nombre.trim() === '' || email.trim() === '') {
        alert('Por favor, completa los campos "Nombre" y "Email".');
        event.preventDefault(); // Evitar el envío del formulario
    }
});