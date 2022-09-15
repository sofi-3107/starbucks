export interface Producto{
  _id?:number;
  nombre?:string;
  cantidadEnStock?:number;
  precioUnitario?:number;
  imagen?:string;

}

export interface Cliente{
  _id?:number;
  nombre?:string;
  apellido?:string;
  domicilio?:string;
  telefono?:string;
  documento?:string;
}

export interface DetallePedido{
_id?:number;
producto?:Producto;
cantidad:number

}

export interface Pedido{
  _id?:number;
  detallePedido:DetallePedido[];
  cliente:Cliente;
}
