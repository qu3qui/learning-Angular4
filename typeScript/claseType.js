var Curso = /** @class */ (function () {
    function Curso() {
    }
    Curso.prototype.getInscritos = function () {
        return this.inscritos;
    };
    Curso.prototype.setInscritos = function (inscritos) {
        this.inscritos = inscritos;
    };
    Curso.prototype.addInscrito = function () {
        this.inscritos++;
    };
    Curso.prototype.remInscritos = function () {
        this.inscritos--;
    };
    return Curso;
}());
var cursoAngular = new Curso();
cursoAngular.setInscritos(9);
cursoAngular.addInscrito();
console.log(cursoAngular.getInscritos());
