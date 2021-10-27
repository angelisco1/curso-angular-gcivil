import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { filter, map, take } from 'rxjs/operators'

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent implements OnInit, OnDestroy {
  numeros: Array<number> = []
  suscripcion: Subscription | null = null;

  constructor() { }

  ngOnInit(): void {
    this.suscripcion = interval(1000)
      .pipe(
        filter(num => num % 2 === 0),
        map(num => num * 2),
        take(10)
      )
      .subscribe(
        (n) => {
          console.log(n)
          this.numeros.push(n)
        }
      )
  }

  ngOnDestroy() {
    this.suscripcion?.unsubscribe()
  }

}
