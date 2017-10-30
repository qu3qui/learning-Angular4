var Curso3 = /** @class */ (function () {
    function Curso3() {
        this.descripcion = "Lorem ipsum";
        this.horas = 20;
        this.inscritos = 0;
    }
    Curso3.prototype.getInscritos = function () {
        return this.inscritos;
    };
    Curso3.prototype.setInscritos = function (inscritos) {
        this.inscritos = inscritos;
    };
    Curso3.prototype.addInscrito = function () {
        this.inscritos++;
    };
    Curso3.prototype.remInscrito = function () {
        this.inscritos--;
    };
    return Curso3;
}());
