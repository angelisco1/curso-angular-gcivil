import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-comunicacion-entre-componentes',
  templateUrl: './cmp-comunicacion-entre-componentes.component.html',
  styleUrls: ['./cmp-comunicacion-entre-componentes.component.css']
})
export class CmpComunicacionEntreComponentesComponent implements OnInit {
  blue: string = 'orange'
  nombreHijo: string = 'Charles'
  nombreHija: string = 'Octavia'

  constructor() { }

  ngOnInit(): void {
  }

  actualizarNombreHijo(nuevoNombre: string): void {
    this.nombreHijo = nuevoNombre;
  }

}
