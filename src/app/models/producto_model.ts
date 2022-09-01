export class Producto{
  _id?:number;
  nombre?:string;
  cantidadEnStock?:number;
  precioUnitario?:number;


  constructor(nombre:string,cantidadEnStock:number,precioUnitario:number){
      this.nombre=nombre;
      this.cantidadEnStock=cantidadEnStock;
      this.precioUnitario=precioUnitario;
  }



}
