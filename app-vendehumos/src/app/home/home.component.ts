import { Component, OnInit } from '@angular/core';
import { Vendehumo } from '../vendehumo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listaVendehumos: Array<Vendehumo> = []
  constructor() { }

  ngOnInit(): void {
    // GET
    this.listaVendehumos.push(new Vendehumo(
        'Vendehumo 1',
        'Descripción 1',
        ['fb', 'twitter'],
        ['apuestas'],
        new Date(),
        0,
        'id1'
      ))
    this.listaVendehumos.push(new Vendehumo(
        'Vendehumo 2',
        'Descripción 2',
        ['instagram', 'youtube'],
        ['trading'],
        new Date(),
        2,
        'id2'
      ))

  }

}
