import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators as V, FormArray } from '@angular/forms'
import { Vendehumo } from '../../vendehumo';
import { VendehumosService } from '../../vendehumos.service';


@Component({
  selector: 'app-nuevo-vendehumo',
  templateUrl: './nuevo-vendehumo.component.html',
  styleUrls: ['./nuevo-vendehumo.component.css']
})
export class NuevoVendehumoComponent implements OnInit {

  formulario: FormGroup;

  categorias = ['apuestas', 'trading', 'cryptos', 'inglés']
  rrss = ['fb', 'twitter', 'instagram', 'youtube']

  // formulario = {
  //   descripcion: '',
  //   nombre: ''
  // }

  constructor(private router: Router, private vhService: VendehumosService) {

    this.formulario = new FormGroup({
      nombre: new FormControl('', [V.required, V.minLength(3)]),
      descripcion: new FormControl('', V.required),
      rrss: new FormArray([]),
      categorias: new FormArray([])
    })

  }

  ngOnInit(): void {
  }

  addRrss(event: any) {
    let rrss: string = event.target.value; // ESTO PUNTO Y COMA ES OBLIGATORIO PORQUE LA SIGUIENTE LINEA EMPIEZA CON UN PARENTESIS
    (<FormArray>this.formulario.controls.rrss).push(new FormControl(rrss))
  }

  addCategoria(event: any) {
    let categoria: string = event.target.value;
    (<FormArray>this.formulario.controls.categorias).push(new FormControl(categoria));
  }

  guardar() {
    console.log(this.formulario)

    const datos = this.formulario.value
    console.log({datos})

    const vh = new Vendehumo(datos.nombre, datos.descripcion, datos.rrss, datos.categorias)

    this.vhService.crearVh(vh).subscribe(() => {
      this.router.navigate(['/']);
    })

  }

}
