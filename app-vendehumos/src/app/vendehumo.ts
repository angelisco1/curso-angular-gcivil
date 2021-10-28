export class Vendehumo {
  constructor(
    public nombre: string,
    public descripcion: string,
    public rrss: Array<string>,
    public categorias: Array<string>,
    public fechaAlta: Date = new Date(),
    public numVotos: number = 0,
    public id: string | null = null) {
  }
}