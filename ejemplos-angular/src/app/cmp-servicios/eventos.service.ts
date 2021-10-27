import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  msgEmitido = new EventEmitter<string>();

  constructor() { }

  sendEvent(msg: string): void {
    this.msgEmitido.emit(msg);
  }
}
