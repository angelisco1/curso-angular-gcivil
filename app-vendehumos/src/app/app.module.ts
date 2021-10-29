import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoutingModule } from './app.routes';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';
import { VendehumoComponent } from './vendehumo/vendehumo.component';
import { DetalleVendehumoComponent } from './detalle-vendehumo/detalle-vendehumo.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component,
    VendehumoComponent,
    DetalleVendehumoComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
