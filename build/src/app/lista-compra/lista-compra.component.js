var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
let ListaCompraComponent = class ListaCompraComponent {
    constructor() {
        this.elementos = [];
        this.list = [];
        this.activated = true;
        this.toggle = true;
        this.buttonStatus = 'Enable';
        this.whenClicked = [false, false];
        this.elementos = ['fruta', 'carne', 'pescado'];
        this.activated = false;
    }
    activar() {
        this.activated = true;
    }
    clearNew() {
    }
    addElement(elemento) {
        this.elementos.push(elemento.value);
        console.log("Se ha introducido el elemento: " + elemento.value);
        elemento.value = '';
        this.new = '';
        elemento.focus();
        return false;
    }
    deleteElement(elemento) {
        console.log("Se ha eliminado el elemento: " + elemento.value);
        for (let i = 0; i < this.elementos.length; i++) {
            if (elemento == this.elementos[i]) {
                this.elementos.splice(i, 1);
            }
        }
        ;
    }
    changeColor(elemento) {
        console.log("Se ha añadido " + elemento + " a la cesta");
        for (let i = 0; i < this.elementos.length; i++) {
            if (elemento == this.elementos[i]) {
                console.log("El elemento num " + i + " que es " + elemento + " se ha toggleado");
                this.toggle = !this.toggle;
            }
        }
        ;
        //this.buttonStatus = this.toggle ? 'Enable' : 'Disable';
    }
    tracked(item, index) {
        return index;
    }
    ngOnInit() {
    }
};
ListaCompraComponent = __decorate([
    Component({
        selector: 'app-lista-compra',
        templateUrl: './lista-compra.component.html',
        styleUrls: ['./lista-compra.component.css']
    }),
    __metadata("design:paramtypes", [])
], ListaCompraComponent);
export { ListaCompraComponent };
//# sourceMappingURL=lista-compra.component.js.map