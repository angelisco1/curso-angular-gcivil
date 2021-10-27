import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  url: string = environment.urlfirebase;

  constructor(private http: HttpClient) { }

  getSeries() {
    return this.http.get(`${this.url}.json`)
      .pipe(
        map((datos: any) => {
          const arrSeries: Array<any> = []
          // {
          //   'aaaaa': {
          //     titulo: 'aa',
          //     finalizada: true
          //   }
          // }

          for (let id in datos) {
            const serie = {
              id: id,
              ...datos[id]
            }
            arrSeries.push(serie)
          }

          // [
          //   {
          //     id: 'aaaaa',
          //     titulo: 'aa',
          //     finalizada: true
          //   }
          // ]

          return arrSeries;
        })
      );
  }

  crearSerie() {
    const serie = {
      titulo: 'Game of Thrones',
      finalizada: true
    }
    return this.http.post(`${this.url}.json`, serie)
  }
}
