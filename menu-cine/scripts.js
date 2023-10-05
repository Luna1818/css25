// Obtener todas las imágenes de las películas
const movieImages = document.querySelectorAll(".movie-image");

// Agregar un manejador de eventos para cada imagen
movieImages.forEach(image => {
    // Escuchar el evento "mouseover" (pasar el cursor sobre la imagen)
    image.addEventListener("mouseover", () => {
        // Aumentar el tamaño de la imagen
        image.style.transform = "scale(1.1)";
        // Cambiar la transición para que sea suave
        image.style.transition = "transform 0.3s ease";
    });

    // Escuchar el evento "mouseout" (retirar el cursor de la imagen)
    image.addEventListener("mouseout", () => {
        // Restaurar el tamaño original de la imagen
        image.style.transform = "scale(1)";
        // Restaurar la transición a su valor predeterminado
        image.style.transition = "transform 0.3s ease";
    });
});
