let nombre: string = "Carlos";
let a: number = 10;
let b: number = 5;


function saludo (nombre){
    return "Hola "+nombre;
}

function imprPantalla(a,b){
    return a+b;
}

function devolverEdad(): number{
    return 12;
}



document.getElementById("encabezado").innerHTML = imprPantalla(a,b);