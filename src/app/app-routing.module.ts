import { NgModule } from '@angular/core';
import { RouterModule, Route} from '@angular/router';
import { ListaCompraComponent } from './lista-compra/lista-compra.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Route[] = [
  { path: 'listas', component: ListaCompraComponent},
  { path: 'about', component: AboutComponent},
  { path: '', redirectTo: '/listas', pathMatch:'full'}
  ];
  
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ]
  //exports :[RouterModule]
})
export class AppRoutingModule { }
