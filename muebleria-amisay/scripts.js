// scripts.js
document.addEventListener("DOMContentLoaded", function () {
    // Obtén todos los elementos de la lista de muebles
    const muebles = document.querySelectorAll("li");

    // Agrega un evento click a cada elemento de la lista de muebles
    muebles.forEach(function (mueble) {
        mueble.addEventListener("click", function () {
            // Obtiene el nombre del mueble (el texto del elemento li)
            const nombreMueble = this.textContent;

            // Muestra una alerta con el nombre del mueble cuando se hace clic en él
            alert(`Has seleccionado: ${nombreMueble}`);
        });
    });
});
