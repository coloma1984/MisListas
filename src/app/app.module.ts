import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route} from '@angular/router'
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { ListaCompraComponent } from './lista-compra/lista-compra.component';

import { DataService } from './data.service';
import { AboutComponent } from './about/about.component';
import { PeriodicosComponent } from './periodicos/periodicos.component';


const routes: Route[] = [
{path:'listas', component: ListaCompraComponent},
{path:'about', component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListaCompraComponent,
    AboutComponent,
    PeriodicosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
