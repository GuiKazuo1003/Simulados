import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimuladoBDComponent } from './simulado-bd/simulado-bd.component';
import { InicioComponent } from './inicio/inicio.component';
import { ExtraSimuladoBDComponent } from './extra-simulado-bd/extra-simulado-bd.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  {path: 'simuladoBD', component: SimuladoBDComponent},
  {path: 'extra_simuladoBD', component: ExtraSimuladoBDComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
