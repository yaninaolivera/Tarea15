const porcentaje = 18
let num = +prompt("Ingrese un número")

if (num > 500) {
    alert(`El ${porcentaje}% de ${num} es: ${num * porcentaje / 100}`)
}else{
    alert(`El número debe ser mayor a 500.`)
}