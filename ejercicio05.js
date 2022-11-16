const peso_parcial = 0.25, peso_final = 0.50, peso_practicas = 0.25

let nombre = prompt("Ingrese el nombre del alumno: ")
let examen_parcial = +prompt("Ingrese la nota de su examen parcial: ")
let examen_final = +prompt("Ingrese la nota de su examen final: ")
let promedio_practicas = +prompt("Ingrese el promedio de prácticas: ")

let promedio_final = (examen_parcial*peso_parcial)+(examen_final*peso_final)+(promedio_practicas*peso_practicas)

if (promedio_final > 10 && promedio_final <= 20) {
    alert(`El nombre del alumno es: ${nombre} y su promedio final es: ${promedio_final}`)
}else{
    alert(`El alumno ${nombre} está desaprobado.`)
}
