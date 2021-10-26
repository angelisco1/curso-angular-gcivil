import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-directivas',
  templateUrl: './cmp-directivas.component.html',
  styleUrls: ['./cmp-directivas.component.css']
})
export class CmpDirectivasComponent implements OnInit {
  color: string = 'yellow'
  tacharLetra: boolean = true

  darkMode: boolean = false
  colores: Array<string> = [
    'azul',
    'amarillo',
    'verde',
    'negro'
  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode
  }

}
