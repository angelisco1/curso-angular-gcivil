import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vendehumo } from './vendehumo';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class VendehumosService {
  url: string = environment.urlfirebase;

  constructor(private http: HttpClient) { }

  crearVh(vh: Vendehumo) {
    return this.http.post(`${this.url}.json`, vh)
  }

  getVhs() {
    return this.http.get(`${this.url}.json`)
      .pipe(
        map((datos: any) => {
          const arrVhs: Array<Vendehumo> = [];
          for (let key in datos) {
            const datosVh = datos[key]
            arrVhs.push(new Vendehumo(
              datosVh.nombre,
              datosVh.descripcion,
              datosVh.rrss,
              datosVh.categorias,
              datosVh.fechaAlta,
              datosVh.numVotos,
              key
            ));
          }
          return arrVhs
        })
      )
  }

  actualizarVotos(id: string, numVotos: number) {
    return this.http.patch(`${this.url}/${id}.json`, {numVotos: numVotos + 1})
  }
}
