import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  url: string = environment.urlfirebase;

  constructor(private http: HttpClient) { }

  getSeriesSinHTTPClient() {
    return new Observable((observer: Observer<Array<any>>) => {

      fetch(`${this.url}.json`)
        .then(resp => resp.json())
        // .then((datos: any) => { // LO PONEMOS EN UN OPERADOR DE LOS OBSERVABLES (MIRAR EL PIPE DE ABAJO)
        //   const arrSeries: Array<any> = []
        //   for (let id in datos) {
        //     const serie = {
        //       id: id,
        //       ...datos[id]
        //     }
        //     arrSeries.push(serie)
        //   }
        //   return arrSeries
        // })
        .then(arr => {
          // .next
          observer.next(arr)
        })

    }).pipe(
      map((datos: any) => {
        const arrSeries: Array<any> = []
        for (let id in datos) {
          const serie = {
            id: id,
            ...datos[id]
          }
          arrSeries.push(serie)
        }
        return arrSeries
      })
    )

  }

  getSeries(): Observable<Array<IDatosSerieConId>> {
    return this.http.get<ISeriesResponse>(`${this.url}.json`)
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

  crearSerie(): Observable<ISerieId> {
    const serie = {
      titulo: 'Game of Thrones',
      finalizada: true
    }
    return this.http.post<ISerieId>(`${this.url}.json`, serie)
  }

  deleteSerie(serieId: string): Observable<null> {
    return this.http.delete<null>(`${this.url}/${serieId}.json`)
  }
}

interface ISerieId {
  name: string
}

interface IDatosSerie {
  titulo: string,
  finalizada: boolean
}

interface IDatosSerieConId extends IDatosSerie {
  id: string
}

// {
//   id: '',
//   titulo: '',
//   finalizada: false
// }

interface ISeriesResponse {
  [key: string]: IDatosSerie
}
// {
//   id: {
//     titulo: '',
//     finalizada: false
//   }
// }