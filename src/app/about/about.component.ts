import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  activated: boolean;
  constructor(private data: DataService){
    this.activated = false;
    this.data.getData().subscribe(data => {
      console.log(data);
      this.posts = data;
    });
  } 
  activar(){
    this.activated = true;
  }

  posts = [];
  
  ngOnInit() {
  }

}
