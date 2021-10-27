import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { EventosService } from '../eventos.service';


@Component({
  selector: 'app-cmp-b',
  templateUrl: './cmp-b.component.html',
  styleUrls: ['./cmp-b.component.css'],
  // providers: [DatosService]
})
export class CmpBComponent implements OnInit {
  datos: Array<string> = []
  msgRecibido: string = ''

  constructor(
    private datosService: DatosService,
    private eventosService: EventosService) { }

  ngOnInit(): void {
    this.datos = this.datosService.getDatos()
    this.eventosService.msgEmitido.subscribe((msg: string) => {
      this.msgRecibido = msg;
    })
  }

  nuevoMensaje(event: any): void {
    this.datosService.addDato(event.target.value);
  }
}
