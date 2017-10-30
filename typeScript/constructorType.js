var Curso2 = /** @class */ (function () {
    function Curso2() {
        this.titulo = "Nombre del curso";
        this.descripcion = "Lorem ipsum";
        this.horas = 20;
        this.inscritos = 0;
    }
    Curso2.prototype.getInscritos = function () {
        return this.inscritos;
    };
    Curso2.prototype.setInscritos = function (inscritos) {
        this.inscritos = inscritos;
    };
    Curso2.prototype.addInscrito = function () {
        this.inscritos++;
    };
    Curso2.prototype.remInscrito = function () {
        this.inscritos--;
    };
    return Curso2;
}());
var cursoAngular2 = new Curso2();
console.log(cursoAngular2);
