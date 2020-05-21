import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.component.html',
  styleUrls: ['./lista-compra.component.css']
})
export class ListaCompraComponent implements OnInit {

  elementos = [];
  new: string;
  listTitle: string; 
  list = [];
  activated: boolean = true;

  constructor() { 
    this.elementos = ['fruta', 'carne', 'pescado'];
    this.activated = false;
  }

  activar(){
    this.activated = true;
  }

  clearNew(){
  }

  addElement(elemento){
    this.elementos.push(elemento.value);
    console.log("Se ha introducido el elemento: "+ elemento.value);
    elemento.value = '';
    this.new ='';
    elemento.focus();
    return false;
  }
  deleteElement(elemento){
    console.log("Se ha eliminado el elemento: "+ elemento.value);
    for(let i=0; i< this.elementos.length; i++) {
      if(elemento == this.elementos[i]){
        this.elementos.splice(i,1);
      }
    };
  }

  ngOnInit() {
  }

}
