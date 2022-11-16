const bonificacion = 7

let nombre = prompt("Ingrese el nombre del trabajador: ")
let sueldo_basico = +prompt("Ingrese el sueldo básico del trabajador: ")
let num_hijos = +prompt("Ingrese el número de hijos del trabajador: ")

if (num_hijos >= 1) {
    let sueldo_final = sueldo_basico + (sueldo_basico * bonificacion / 100)
    alert(`Su bonificación es: ${bonificacion}%  y el sueldo final es ${sueldo_final}`)
}else{
    alert(`No tiene bonificación porque no tiene ningún hijo.`)
}
