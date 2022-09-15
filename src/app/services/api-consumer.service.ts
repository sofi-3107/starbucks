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

    return this.http.get<Producto[]>('http://localhost:8000/').pipe(
       catchError(this.handleError)
    );
   }

   public getProductosCarrito():Observable<DetallePedido[]>{
      return this.productosCarrito$.asObservable();
   }

   public addProductToCart(p:Producto){
    this.productosCarrito=[...this.productosCarrito,p];
    this.productosCarrito$.next(this.productosCarrito);
   }

   public popProductFromCart(p:Producto){
    this.productosCarrito=this.productosCarrito.filter((c:Producto)=>c._id==p._id);
    this.productosCarrito$.next(this.productosCarrito);
   }


   public  confirmarPedido():void{
    /**post pedido */
      this.productosCarrito=[];
      this.productosCarrito$.next([]);
      this.cliente={};

   }
}
