import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hija',
  templateUrl: './hija.component.html',
  styleUrls: ['./hija.component.css']
})
export class HijaComponent implements OnInit {
  @Input() nombre: string = ''
  @Input() nombreHermano: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
