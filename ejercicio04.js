const descuento = 12
let importe = +prompt("Ingrese el monto de una compra: ")

if (importe >= 150) {
    let importe_final = importe - (importe * descuento / 100)
    alert(`El descuento es ${descuento}% y el importe final de compra es: ${importe_final} `)
} else {
    alert(`No tiene descuento porque el importe es menor a 150`)
}

