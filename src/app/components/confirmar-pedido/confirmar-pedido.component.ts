import { Component, OnInit } from '@angular/core';
import { ApiConsumerService } from 'src/app/services/api-consumer.service';

@Component({
  selector: 'app-confirmar-pedido',
  templateUrl: './confirmar-pedido.component.html',
  styleUrls: ['./confirmar-pedido.component.css']
})
export class ConfirmarPedidoComponent implements OnInit {

  productos:any;
  titulo:string='Detalle del Pedido';
  constructor(private service:ApiConsumerService) {
    this.service.getProductosCarrito().subscribe((r:any)=>this.productos=r);
    console.log(this.productos.length);
   }

  ngOnInit(): void {
  }

}
