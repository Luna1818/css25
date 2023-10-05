document.addEventListener("DOMContentLoaded", function () {
    // Obtener el formulario de contacto
    const formulario = document.querySelector("form");

    // Agregar un evento de envío del formulario
    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe

        // Obtener los valores de los campos del formulario
        const nombre = document.querySelector("#nombre").value;
        const email = document.querySelector("#email").value;
        const mensaje = document.querySelector("#mensaje").value;

        // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor
        // Por ahora, mostraremos una alerta con los datos
        alert(`Gracias, ${nombre}.\nTu mensaje (${mensaje}) ha sido enviado a ${email}.`);
        
        // Limpia los campos del formulario
        formulario.reset();
    });
});
