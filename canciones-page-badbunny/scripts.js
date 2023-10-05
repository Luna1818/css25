// scripts.js

// Obtén todos los elementos de la lista de canciones
const canciones = document.querySelectorAll('li');

// Agrega un evento de clic a cada elemento de la lista
canciones.forEach((cancion) => {
    cancion.addEventListener('click', () => {
        // Genera un color de fondo aleatorio en formato hexadecimal
        const colorAleatorio = '#' + Math.floor(Math.random()*16777215).toString(16);
        
        // Cambia el color de fondo del elemento de la lista
        cancion.style.backgroundColor = colorAleatorio;
    });
});
