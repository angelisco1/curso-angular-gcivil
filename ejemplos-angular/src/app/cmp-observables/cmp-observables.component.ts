import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-cmp-observables',
  templateUrl: './cmp-observables.component.html',
  styleUrls: ['./cmp-observables.component.css']
})
export class CmpObservablesComponent implements OnInit {

  mostrarCmp = true

  constructor() { }

  ngOnInit(): void {

    const fnComplete = () => { // SE EJECUTA CUANDO SE LLAMA AL .complete()
      console.log('La suscripción se ha terminado')
    }

    const fnError = (err: any) => { // SE EJECUTA CUANDO SE LLAMA AL .error()
      console.error(err)
    }

    this.miObservable()
      .subscribe(
        function(msg) { // SE EJECUTA CUANDO SE LLAMA AL .next()
          console.log(msg)
        },
        fnError,
        fnComplete
      )
  }

  miObservable(): Observable<string> {
    const obs = new Observable((observer: Observer<string>) => {
      observer.next('Mensaje 1')
      setTimeout(() => {
        observer.next('Mensaje 2')
      }, 2000)

      setTimeout(() => {
        // observer.complete()
        observer.error('Error 2')
      }, 4000)
    })

    return obs;
  }

}
