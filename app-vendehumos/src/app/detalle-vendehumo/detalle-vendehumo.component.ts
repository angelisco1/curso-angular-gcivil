import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-vendehumo',
  templateUrl: './detalle-vendehumo.component.html',
  styleUrls: ['./detalle-vendehumo.component.css']
})
export class DetalleVendehumoComponent implements OnInit {
  id: string | null = ''

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activatedRoute)
    this.activatedRoute.paramMap.subscribe(params => {
      // console.log(params)
      if (params.has('id')) {
        this.id = params.get('id')
      }
    })
    // this.activatedRoute.queryParamMap
    // localhost:4200/loquesea?param1=true&param2=angel

  }

}
