import { Component, OnInit } from '@angular/core';
import { Vendehumo } from '../vendehumo';
import { VendehumosService } from '../vendehumos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listaVendehumos: Array<Vendehumo> = []
  constructor(private vhService: VendehumosService) { }

  ngOnInit(): void {
    this.vhService.getVhs().subscribe((vendehumos: Array<Vendehumo>) => {
      this.listaVendehumos = vendehumos;
    })
  }

  actualizarVh(event: any) {
    this.listaVendehumos = this.listaVendehumos.map(vh => {
      if (vh.id === event.id) {
        vh.numVotos = event.numVotos
      }
      return vh;
    })
  }

}