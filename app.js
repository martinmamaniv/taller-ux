document.getElementById('notaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const titulo = document.getElementById('tituloNota').value.trim();
    const contenido = document.getElementById('contenidoNota').value.trim();
    const mensaje = document.getElementById('mensajeEstado');

    if (!titulo || !contenido) {
        mensaje.style.color = '#dc2626';
        mensaje.textContent = 'Error: Los campos no pueden estar vacíos.';
        return;
    }

    mensaje.style.color = '#16a34a';
    mensaje.textContent = '¡Nota guardada y registrada con éxito!';

    this.reset();

    setTimeout(() => {
        mensaje.textContent = '';
    }, 4000);
});