import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { SimuladoBDComponent } from './simulado-bd/simulado-bd.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ExtraSimuladoBDComponent } from './extra-simulado-bd/extra-simulado-bd.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SimuladoBDComponent,
    ExtraSimuladoBDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
