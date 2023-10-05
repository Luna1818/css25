// scripts.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("job-application-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(form);

        // Aquí puedes procesar los datos del formulario, como enviarlos a un servidor o mostrarlos en la consola
        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        // Puedes agregar aquí la lógica para enviar el formulario a un servidor
    });
});
