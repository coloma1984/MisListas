import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MisListas';
  activated: boolean;
  menuActivated: boolean;

  constructor(private data: DataService){
    this.activated = false;
    this.menuActivated = true;
  }

  activarMenu(){
    this.menuActivated = false;
  }

}
