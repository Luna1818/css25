// Selecciona el elemento del encabezado por su ID
const tituloAeropuerto = document.getElementById('tituloAeropuerto');

// Agrega un evento de clic al encabezado
tituloAeropuerto.addEventListener('click', cambiarColorFondo);

// Función para cambiar el color de fondo del encabezado
function cambiarColorFondo() {
    // Genera un color aleatorio en formato hexadecimal
    const colorAleatorio = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Cambia el color de fondo del encabezado
    tituloAeropuerto.style.backgroundColor = colorAleatorio;
}
