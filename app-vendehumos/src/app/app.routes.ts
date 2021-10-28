import { RouterModule, Routes } from '@angular/router';
import { DetalleVendehumoComponent } from './detalle-vendehumo/detalle-vendehumo.component';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { NuevoVendehumoComponent } from './nuevo-vendehumo/nuevo-vendehumo.component';

const APP_ROUTES: Routes = [
  { path: 'vendehumos', component: HomeComponent, children: [
    { path: ':id', component: DetalleVendehumoComponent },
  ] },
  { path: 'nuevo-vendehumo', component: NuevoVendehumoComponent },
  { path: '', redirectTo: 'vendehumos', pathMatch: 'full' },
  { path: '**', component: Error404Component },
]

// localhost:4200/
// localhost:4200/nuevo-vendehumo
// localhost:4200/vendehumos/3
// localhost:4200/vendehumos/90
// localhost:4200/vendehumos/-Mq82k2dj2fi23

export const RoutingModule = RouterModule.forRoot(APP_ROUTES)