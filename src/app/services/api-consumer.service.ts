import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {  BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cliente, DetallePedido, Producto } from '../models/producto_model';


@Injectable({
  providedIn: 'root'
})
export class ApiConsumerService {

  private importeTotal:number;
  private importeTotal$:Subject<number>;

  private productosCarrito:DetallePedido[];
  private productosCarrito$:BehaviorSubject<DetallePedido[]>;
  cliente:Cliente ={};

  constructor(private http:HttpClient) {
    this.importeTotal=0;
    this.productosCarrito=[];
    this.productosCarrito$=new BehaviorSubject(this.productosCarrito);
    this.importeTotal$=new Subject();
   }

   private handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.error('Ha ocurrido un error: '+error.message);
    }else{
      console.error(' Backend Response eror code: '+error.status+' '+error.message);
    }
    return throwError(()=>new Error('Lo lamentamos, ha ocurrido un error'));
   }

   public getImporteTotal():Observable<number>{
    return this.importeTotal$.asObservable();
   }

   public addToImporteTotal(cash:number){
    this.importeTotal=+cash;
    this.importeTotal$.next(this.importeTotal);
   }



   public getProductos(): Observable<Producto[]>{

    let data = new Observable<Producto[]>((obsever)=>{
      obsever.next([
        {
          id:2,
          nombre:"RATAS",
          cantidadEnStock:12,
          precioUnitario:435,
          imagen:"https://image.petmd.com/files/2022-06/gray.dumbo_.rat_.jpg"
        },
        {
          id:3,
          nombre:"PALOMAS",
          cantidadEnStock:22,
          precioUnitario:495,
          imagen:"https://www.investigacionyciencia.es/images/63200/articleImage-big.jpg"
        },
        {
          id:4,
          nombre:"PAPAS",
          cantidadEnStock:223,
          precioUnitario:41235,
          imagen:"https://saborusa.com.pa/imagesmg/imagenes/5ff3e6a0b703f_potatoes-food-supermarket-agriculture-JG7QGNY.jpg"
        },
        {
          id:5,
          nombre:"ZAPATILLAS",
          cantidadEnStock:4,
          precioUnitario:4,
          imagen:"https://phantom-telva.unidadeditorial.es/743169d664d4dfd749d96cd450f5cbdf/crop/163x0/1785x913/resize/828/f/jpg/assets/multimedia/imagenes/2022/08/05/16596598871872.jpg"
        },
      ])
    })
    return data
   }

   public getProductosCarrito():Observable<DetallePedido[]>{
      return this.productosCarrito$.asObservable();
   }

   public addProductToCart(p:DetallePedido){
    this.productosCarrito=[...this.productosCarrito,p];
    this.productosCarrito$.next(this.productosCarrito);
   }

   public popProductFromCart(p:Producto){
    this.productosCarrito=this.productosCarrito.filter(c=>c.id==p.id);
    this.productosCarrito$.next(this.productosCarrito);
   }


   public  confirmarPedido():void{
    /**post pedido */
      this.productosCarrito=[];
      this.productosCarrito$.next([]);
      this.cliente={};

   }
}
