import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { DataService } from './data.service';
import { DataApiService } from './services/data-api.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'MisListas';
  activated: boolean;
  menuActivated: boolean;
  
  constructor(private data: DataService, private dataApi: DataApiService, private elementRef: ElementRef, public translate:TranslateService){
    this.activated = false;
    this.menuActivated = true;
    this.translate.addLangs(['es','en']);
    this.translate.setDefaultLang('es');
    this.translate.use('en');

    this.translate.get('APP.NAV.PRINCIPAL').subscribe(res=>{
      console.log(res);
    });
    //esto es caca
    const res2 = this.translate.instant('APP.NAV.PRINCIPAL');
    console.log(res2);
  }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.background = "#0575E6";
  }

  ngOnInit(){
   // this.getListBooks();
  }

  activarMenu(){
    this.menuActivated = false;
  }

  /*getListBooks(){
    this.dataApi.getAllBooks().subscribe(books => console.log(books));
  }*/

}
