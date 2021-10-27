import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
  // pure: false // ESTO NO DEBERIAMOS DE USARLO
})
export class FiltroPipe implements PipeTransform {

  transform(value: Array<any>, textoFiltro: string): Array<any> {
    return value.filter((t: any) => {
      // ...
      return t.titulo.includes(textoFiltro)
    });
    // return value.filter((t: any) => t.titulo.includes(textoFiltro));
    // return value.filter(function(t: any) {t.titulo.includes(textoFiltro)});
  }

}
