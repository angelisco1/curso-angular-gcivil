import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoVendehumoComponent } from './nuevo-vendehumo/nuevo-vendehumo.component';
import { LazyRoutingModule } from './nuevo-vendehumo.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NuevoVendehumoComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ModuloLazyModule { }
