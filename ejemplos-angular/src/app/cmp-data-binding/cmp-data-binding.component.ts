import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-data-binding',
  templateUrl: './cmp-data-binding.component.html',
  styleUrls: ['./cmp-data-binding.component.css']
})
export class CmpDataBindingComponent implements OnInit {

  nombre: string = 'Ángel';
  // nombre: string | null = null;
  // string, number, boolean, any, Array<number>, string[], null, void

  botonDeshabilitado: boolean = false;
  url: string = 'http://www.google.es'

  constructor() {
  }

  ngOnInit(): void {
  }

  getNombre(): string {
    return this.nombre;
  }

  toggleDisabled(): void {
    this.botonDeshabilitado = !this.botonDeshabilitado
  }

  mostrarElValor(event: any) {
    console.log({event})
    console.log(event.target.value)
  }

  actualizaNombre(event: any): void {
    this.nombre = event.target.value;
  }

}
