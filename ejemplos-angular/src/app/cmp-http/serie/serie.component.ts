import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  @Input() serie: any = null;

  constructor() { }

  ngOnInit(): void {
    console.log(this.serie)
  }

}
