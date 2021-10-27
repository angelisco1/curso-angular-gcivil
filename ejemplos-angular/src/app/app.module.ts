import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PrimerComponenteComponent } from './primer-componente/primer-componente.component';
import { CmpDataBindingComponent } from './cmp-data-binding/cmp-data-binding.component';
import { CmpComunicacionEntreComponentesComponent } from './cmp-comunicacion-entre-componentes/cmp-comunicacion-entre-componentes.component';
import { SugusComponent } from './cmp-comunicacion-entre-componentes/sugus/sugus.component';
import { HijoComponent } from './cmp-comunicacion-entre-componentes/hijo/hijo.component';
import { HijaComponent } from './cmp-comunicacion-entre-componentes/hija/hija.component';
import { CmpDirectivasComponent } from './cmp-directivas/cmp-directivas.component';
import { MarcarDirective } from './cmp-directivas/marcar.directive';
import { CmpPipesComponent } from './cmp-pipes/cmp-pipes.component';
import { FiltroPipe } from './cmp-pipes/filtro.pipe';
import { DoblePipe } from './cmp-pipes/doble.pipe';
import { CmpServiciosComponent } from './cmp-servicios/cmp-servicios.component';
import { CmpBComponent } from './cmp-servicios/cmp-b/cmp-b.component';
import { CmpAComponent } from './cmp-servicios/cmp-a/cmp-a.component';
import { DatosService } from './cmp-servicios/datos.service';
import { CmpObservablesComponent } from './cmp-observables/cmp-observables.component';
import { UnsubscribeComponent } from './cmp-observables/unsubscribe/unsubscribe.component';
import { CmpHttpComponent } from './cmp-http/cmp-http.component';
import { SerieComponent } from './cmp-http/serie/serie.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponenteComponent,
    CmpDataBindingComponent,
    CmpComunicacionEntreComponentesComponent,
    SugusComponent,
    HijoComponent,
    HijaComponent,
    CmpDirectivasComponent,
    MarcarDirective,
    CmpPipesComponent,
    FiltroPipe,
    DoblePipe,
    CmpServiciosComponent,
    CmpBComponent,
    CmpAComponent,
    CmpObservablesComponent,
    UnsubscribeComponent,
    CmpHttpComponent,
    SerieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
