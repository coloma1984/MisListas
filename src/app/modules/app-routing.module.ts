import { NgModule } from '@angular/core';
import { RouterModule, Route} from '@angular/router';
import { ListaCompraComponent } from '../lista-compra/lista-compra.component';
import { PeriodicosComponent } from '../periodicos/periodicos.component';
import { AboutComponent } from '../about/about.component';
import { RegistroComponent } from '../registro/registro.component';
import { PrincipalComponent } from '../principal/principal.component';


const appRoutes: Route[] = [
  { path: 'registro', component: RegistroComponent},
  { path: 'principal', component: PrincipalComponent},
  { path: 'listas', component: ListaCompraComponent},
  { path: 'periodicos', component: PeriodicosComponent},
  { path: 'about', component: AboutComponent},
  { path: '', redirectTo: '/registro', pathMatch:'full'}
  ];
  
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports :[RouterModule]
})
export class AppRoutingModule { }
