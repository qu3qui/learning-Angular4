class Curso2 {
  public titulo: string;
  public descripcion: string;
  public horas: number;
  public inscritos: number;

  constructor() {
    this.titulo = "Nombre del curso";
    this.descripcion = "Lorem ipsum";
    this.horas = 20;
    this.inscritos = 0;
  }

  public getInscritos() {
    return this.inscritos;
  }
  public setInscritos(inscritos: number) {
    this.inscritos = inscritos;
  }
  public addInscrito() {
    this.inscritos++;
  }
  public remInscrito() {
    this.inscritos--;
  }
}

var cursoAngular2 = new Curso2();
console.log(cursoAngular2);
