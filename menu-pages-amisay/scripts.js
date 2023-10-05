document.addEventListener("DOMContentLoaded", function () {
    // Obtener el botón de Productos por su etiqueta <button>
    const botonProductos = document.querySelector("button");

    // Agregar un evento clic al botón de Productos
    botonProductos.addEventListener("click", function () {
        alert("¡Bienvenido a la sección de productos de Barcel!");
        // Puedes redirigir al usuario a la página de productos aquí si lo deseas.
        // Por ejemplo, window.location.href = "./products/index.html";
    });
});
