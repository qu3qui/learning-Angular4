/*let se utiliza para definicion de variables locales, mientras que var se utiliza
para definicion de variables globales */
//let a = 10;
var a = 10;
if (true) {
    //let a = 15;
    var a = 15;
    console.log("Dentro del if a tiene un valor de " + a);
}
else {
    //
}
console.log("Fuera del if a tiene un valor de " + a);
