import { Component } from '@angular/core';
import { Producto } from './models/producto_model';
import { ApiConsumerService } from './services/api-consumer.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public productos:Array<Producto>=[];
  title = 'starbucks';

  importeTotal:any=0;

  constructor(private service:ApiConsumerService){
    this.service.getProductos().subscribe((resp:any)=>this.productos=resp);
    this.service.getImporteTotal().subscribe((resp:any)=>this.importeTotal=resp);
  }


  addToCart(p:any){
    this.service.addProductToCart(p);
    console.log('AddToCart parent: '+ p.nombre);

  }
}
