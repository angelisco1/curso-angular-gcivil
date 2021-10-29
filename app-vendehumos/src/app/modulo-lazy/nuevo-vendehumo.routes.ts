import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth.guard";
import { NuevoVendehumoComponent } from "./nuevo-vendehumo/nuevo-vendehumo.component";


const RutasNuevoVh: Routes = [
  { path: '', component: NuevoVendehumoComponent, canActivate: [AuthGuard] }
]

export const LazyRoutingModule = RouterModule.forChild(RutasNuevoVh)