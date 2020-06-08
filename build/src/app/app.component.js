var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef } from '@angular/core';
import { DataService } from './data.service';
import { DataApiService } from './services/data-api.service';
import { TranslateService } from '@ngx-translate/core';
let AppComponent = class AppComponent {
    constructor(data, dataApi, elementRef, translate) {
        this.data = data;
        this.dataApi = dataApi;
        this.elementRef = elementRef;
        this.translate = translate;
        this.title = 'MisListas';
        this.activated = false;
        this.menuActivated = true;
        this.translate.addLangs(['es', 'en']);
        this.translate.setDefaultLang('es');
        this.translate.use('en');
        this.translate.get('APP.NAV.PRINCIPAL').subscribe(res => {
            console.log(res);
        });
        //esto es caca
        const res2 = this.translate.instant('APP.NAV.PRINCIPAL');
        console.log(res2);
    }
    ngAfterViewInit() {
        this.elementRef.nativeElement.ownerDocument.body.style.background = "#0575E6";
    }
    ngOnInit() {
        // this.getListBooks();
    }
    activarMenu() {
        this.menuActivated = false;
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }),
    __metadata("design:paramtypes", [DataService, DataApiService, ElementRef, TranslateService])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map