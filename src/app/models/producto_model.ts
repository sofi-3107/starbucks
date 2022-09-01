export class Producto{
  _id?:number;
  nombre?:string;
  cantidadEnStock?:number;
  precioUnitario?:number;
  imagen?:string;


  constructor(nombre:string,cantidadEnStock:number,precioUnitario:number,imagen:string){
      this.nombre=nombre;
      this.cantidadEnStock=cantidadEnStock;
      this.precioUnitario=precioUnitario;
      this.imagen=imagen
  }



}
