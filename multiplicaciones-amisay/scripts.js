function generarTabla() {
    const numero = parseInt(document.getElementById('numero').value);
    const tabla = document.getElementById('tabla');
    
    if (!isNaN(numero)) {
        tabla.innerHTML = '<h2>Tabla de Multiplicar del ' + numero + '</h2>';
        tabla.innerHTML += '<ul>';
        for (let i = 1; i <= 10; i++) {
            tabla.innerHTML += '<li>' + numero + ' x ' + i + ' = ' + (numero * i) + '</li>';
        }
        tabla.innerHTML += '</ul>';
    } else {
        tabla.innerHTML = '<p>Por favor, ingrese un número válido.</p>';
    }
}