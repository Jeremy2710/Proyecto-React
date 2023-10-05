
function mostrarTarjeta(numero) {
    document.querySelectorAll('.tarjeta').forEach(function (tarjeta) {
        tarjeta.style.display = 'none';
    });
    document.getElementById('tarjeta' + numero).style.display = 'block';
}
