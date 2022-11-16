let num = +prompt("Ingrese el número: ")
let factorial = 1

if (num >= 0) {
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i
    }
    alert(`El factorial de ${num}! es: ${factorial}`)
}else{
    alert(`El número no tiene factorial`)
}

