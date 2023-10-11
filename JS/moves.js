document.getElementById("retroceder").addEventListener("click", function () {
    // Retrocede a index.html al hacer clic en el botón
    window.location.href = "product.html";
});


function mostrarAlertasBajoStock(umbral) {
    const alertaEncontrada = false;

    for (const producto of database.productos) {
        if (producto.cantidad < umbral) {
            console.log(`${producto.nombre} tiene un bajo stock: ${producto.cantidad} unidades`);
            alertaEncontrada = true;
        }
    }

    if (!alertaEncontrada) {
        console.log('No hay alertas de bajo stock.');
    }
}