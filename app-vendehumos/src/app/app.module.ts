import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoutingModule } from './app.routes';
import { HomeComponent } from './home/home.component';
import { NuevoVendehumoComponent } from './nuevo-vendehumo/nuevo-vendehumo.component';
import { Error404Component } from './error404/error404.component';
import { VendehumoComponent } from './vendehumo/vendehumo.component';
import { FormsModule } from '@angular/forms';
import { DetalleVendehumoComponent } from './detalle-vendehumo/detalle-vendehumo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NuevoVendehumoComponent,
    Error404Component,
    VendehumoComponent,
    DetalleVendehumoComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
