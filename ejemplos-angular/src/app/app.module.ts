import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
    DoblePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
