import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doble'
})
export class DoblePipe implements PipeTransform {

  transform(value: number, suma?: number): number {
    let res = value * 2;
    if (suma) {
      res += suma
    }
    return res
  }

  // transform(value: number, suma: number = 0): number {
  //   return value * 2 + suma;
  // }

}
