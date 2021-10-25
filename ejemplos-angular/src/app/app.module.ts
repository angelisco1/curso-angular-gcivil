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

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponenteComponent,
    CmpDataBindingComponent,
    CmpComunicacionEntreComponentesComponent,
    SugusComponent,
    HijoComponent,
    HijaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
