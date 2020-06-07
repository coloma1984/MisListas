import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  menuActivated: boolean;
  
  constructor(){
    this.menuActivated = true;
  }


  ngOnInit(){
  }

  activarMenu(){
    this.menuActivated = false;
  }

}
