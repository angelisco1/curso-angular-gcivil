import { Component, Input, OnInit } from '@angular/core';
import { Vendehumo } from '../vendehumo';

@Component({
  selector: 'app-vendehumo',
  templateUrl: './vendehumo.component.html',
  styleUrls: ['./vendehumo.component.css']
})
export class VendehumoComponent implements OnInit {

  @Input() vendehumo: Vendehumo | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  sumarVoto() {
    alert('Implementa está función')
  }

}
