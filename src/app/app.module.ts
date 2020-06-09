import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DataService } from './data.service';
import { DataApiService } from './services/data-api.service';

import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { PrincipalComponent } from './principal/principal.component';
import { ListaCompraComponent } from './lista-compra/lista-compra.component';
import { PeriodicosComponent } from './periodicos/periodicos.component';
import { AboutComponent } from './about/about.component';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppTranslateModule } from './modules/app-translate.module';

import { MaterialModule } from './material';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ListaCompraComponent,
    AboutComponent,
    PeriodicosComponent,
    RegistroComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AppTranslateModule,
    BrowserAnimationsModule
  ],
  providers: [DataService, DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
