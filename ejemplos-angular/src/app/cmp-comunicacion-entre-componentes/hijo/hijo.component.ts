import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  @Input() nombre: string = ''
  @Output() nombreCambiado = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  cambiarNombre(event: any): void {
    this.nombreCambiado.emit(event.target.value)
  }

}
