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


  constructor(private service:ApiConsumerService){
    this.service.getProductos().subscribe((resp:any)=>this.productos=resp);
  }
}
