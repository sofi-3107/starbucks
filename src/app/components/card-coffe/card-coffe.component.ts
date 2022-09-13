import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-coffe',
  templateUrl: './card-coffe.component.html',
  styleUrls: ['./card-coffe.component.css']
})
export class CardCoffeComponent implements OnInit {

  cantidad:number=0;
  disponible:number=10;
  @Input()
  nombre:string='';
  @Input()
  imagen:string='';
  @Input()
  cantidadEnStock:number=0;
  @Input()
  costoUnitario:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  addOne(){
    this.cantidad++;
    this.disponible==0?0:this.disponible--;

  }

  LessOne(){
    this.cantidad==0?0:this.cantidad--;
    this.disponible<10?this.disponible++:this.disponible;
  }

}
