var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
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
            AppTranslateModule
        ],
        providers: [DataService, DataApiService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map