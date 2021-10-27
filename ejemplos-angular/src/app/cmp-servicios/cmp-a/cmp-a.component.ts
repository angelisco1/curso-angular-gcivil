import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { EventosService } from '../eventos.service';

@Component({
  selector: 'app-cmp-a',
  templateUrl: './cmp-a.component.html',
  styleUrls: ['./cmp-a.component.css']
})
export class CmpAComponent implements OnInit {
  datos: Array<string> = []
  constructor(
    private datosService: DatosService,
    private eventosService: EventosService) { }

  ngOnInit(): void {
    this.datos = this.datosService.getDatos()
  }

  nuevoMensaje(event: any): void {
    this.datosService.addDato(event.target.value);
  }

  emitirMensaje(event: any): void {
    this.eventosService.sendEvent(event.target.value)
  }
}
