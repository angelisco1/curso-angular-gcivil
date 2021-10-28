import { Component, OnInit } from '@angular/core';
import { SeriesService } from './series.service';

@Component({
  selector: 'app-cmp-http',
  templateUrl: './cmp-http.component.html',
  styleUrls: ['./cmp-http.component.css']
})
export class CmpHttpComponent implements OnInit {
  series: Array<any> = []
  sugus = [
    { sabor: 'piña', color: 'blue' },
    { sabor: 'naranja', color: 'orange' },
    { sabor: 'fresa', color: 'red' },
  ]

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    // this.seriesService.getSeriesSinHTTPClient()
    this.getDatosSeries()
  }

  guardarSerie() {
    this.seriesService.crearSerie()
      .subscribe((datos) => {
        console.log(datos)
        console.log('id', datos.name)
        this.getDatosSeries()
      })
  }

  getDatosSeries() {
    this.seriesService.getSeries()
      .subscribe((datos) => {
        this.series = datos
      })
  }

  actualizarArrSeries(serieId: string) {
    this.series = this.series.filter(s => s.id !== serieId)
  }
}
