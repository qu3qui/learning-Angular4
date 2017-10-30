var nombre = "Carlos";
var a = 10;
var b = 5;
function saludo(nombre) {
    return "Hola " + nombre;
}
function imprPantalla(a, b) {
    return a + b;
}
function devolverEdad() {
    return 12;
}
document.getElementById("encabezado").innerHTML = imprPantalla(a, b);
