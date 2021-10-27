import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private datos: Array<string> = [
    'Dato 1'
  ]

  constructor() { }

  getDatos(): Array<string> {
    return this.datos;
  }

  addDato(nuevoDato: string): void {
    this.datos.push(nuevoDato);
  }
}
