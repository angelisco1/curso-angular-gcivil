import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  @Input() serie: any = null;
  @Output() serieEliminada = new EventEmitter<string>()

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    console.log(this.serie)
  }

  eliminar() {
    this.seriesService.deleteSerie(this.serie.id)
      .subscribe((datos) => {
        console.log(datos)
        this.serieEliminada.emit(this.serie.id)
      })
  }
}
