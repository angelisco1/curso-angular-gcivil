import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-pipes',
  templateUrl: './cmp-pipes.component.html',
  styleUrls: ['./cmp-pipes.component.css']
})
export class CmpPipesComponent implements OnInit {

  producto: any = {
    nombre: 'one plus 8t',
    precio: 800,
    descripcion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla obcaecati nemo nesciunt quasi neque, minus ipsum nobis necessitatibus, inventore id maxime, facere laboriosam labore veniam. Quaerat iste autem beatae consequuntur.',
    fechaDeSalida: new Date()
  }

  tareas: Array<any> = [
    { id: 1, titulo: 'Tarea 1', completada: true },
    { id: 2, titulo: 'Tarea 2', completada: true },
  ]
  textoFiltro: string = ''

  usuarios: Array<any> = []
  promesaUsuarios: Promise<any> | null = null;

  constructor() { }

  ngOnInit(): void {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then((resp: any) => {
        return resp.json()
      })
      .then((datos: any) => {
        console.log(datos)
        this.usuarios = datos
      })

    this.promesaUsuarios = fetch('http://jsonplaceholder.typicode.com/users')
      .then((resp: any) => {
        return resp.json()
      })
    // new Promise((resolve) => {
    //   resolve(['usuario1', 'usuario2'])
    // })
    //   .then(datos => {
    //     console.log(datos)
    //   })
  }

  addTarea(event: any): void {
    // this.tareas.push({
    //   id: Math.random(),
    //   titulo: event.target.value,
    //   completada: false
    // })

    this.tareas = [...this.tareas, {
        id: Math.random(),
        titulo: event.target.value,
        completada: false
    }]
  }

}
