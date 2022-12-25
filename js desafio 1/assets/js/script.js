const precio = 4000

document.getElementById("calcularTotal").addEventListener("click", function() {
    const cantidad = document.getElementById ("cantidad").value
    const color = document.getElementById ("selectColor"). value

    const precioFinal = cantidad * precio;

    document.getElementById ("precioFinal").innerHTML = `<p>${precioFinal}</p>`
    document.getElementById ("cantidadFinal").innerText = cantidad
    document.getElementById ("colorCircle").style.backgroundColor = color

})