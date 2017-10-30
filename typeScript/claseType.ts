class Curso{
    public titulo: string;
    public descripcion: string;
    public horas: number;
    public inscritos: number;

    public getInscritos(){
        return this.inscritos;
    }

    public setInscritos(inscritos: number){
        this.inscritos = inscritos;
    }

    public addInscrito(){
        this.inscritos++;
    }

    public remInscritos(){
        this.inscritos--;
    }  
}

var cursoAngular = new Curso();

cursoAngular.setInscritos(9);
cursoAngular.addInscrito();

console.log(cursoAngular.getInscritos());