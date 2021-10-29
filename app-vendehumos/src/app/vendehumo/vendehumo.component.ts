import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vendehumo } from '../vendehumo';
import { VendehumosService } from '../vendehumos.service';

@Component({
  selector: 'app-vendehumo',
  templateUrl: './vendehumo.component.html',
  styleUrls: ['./vendehumo.component.css']
})
export class VendehumoComponent implements OnInit {

  @Input() vendehumo: Vendehumo | null = null;
  @Output() vhActualizado = new EventEmitter<any>();

  constructor(private vhService: VendehumosService) { }

  ngOnInit(): void {
  }

  sumarVoto() {
    if (this.vendehumo?.id) {
      this.vhService.actualizarVotos(this.vendehumo?.id, this.vendehumo?.numVotos)
        .subscribe((resp: any) => {
          console.log(resp)
          this.vhActualizado.emit({id: this.vendehumo?.id, numVotos: resp.numVotos})
        })
    }
  }

}
