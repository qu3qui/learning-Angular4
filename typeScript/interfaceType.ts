interface DatosMaestros{
    titulo: string;
    addInscrito();
}

class Curso3  implements DatosMaestros {
    public descripcion: string;
    public horas: number;
    public inscritos: number;
  
    constructor() {
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

