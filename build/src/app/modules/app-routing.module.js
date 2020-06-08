var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListaCompraComponent } from '../lista-compra/lista-compra.component';
import { PeriodicosComponent } from '../periodicos/periodicos.component';
import { AboutComponent } from '../about/about.component';
import { RegistroComponent } from '../registro/registro.component';
import { PrincipalComponent } from '../principal/principal.component';
const appRoutes = [
    { path: 'registro', component: RegistroComponent },
    { path: 'principal', component: PrincipalComponent },
    { path: 'listas', component: ListaCompraComponent },
    { path: 'periodicos', component: PeriodicosComponent },
    { path: 'about', component: AboutComponent },
    { path: '', redirectTo: '/registro', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(appRoutes)
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map