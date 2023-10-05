// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const enfermedadForm = document.getElementById('enfermedad-form');
    const enfermedadesList = document.getElementById('enfermedades-list');

    enfermedadForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const descripcion = document.getElementById('descripcion').value;
        const gravedad = document.getElementById('gravedad').value;

        const enfermedadInfo = document.createElement('div');
        enfermedadInfo.classList.add('enfermedad-info');
        enfermedadInfo.innerHTML = `
            <h2>${nombre}</h2>
            <p><strong>Descripción:</strong> ${descripcion}</p>
            <p><strong>Gravedad:</strong> ${gravedad}</p>
        `;

        enfermedadesList.appendChild(enfermedadInfo);

        // Limpia el formulario
        enfermedadForm.reset();
    });
});
