import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { Producto } from '../models/producto_model';


@Injectable({
  providedIn: 'root'
})
export class ApiConsumerService {

  private importeTotal:number;
  private importeTotal$:Subject<number>;

  private productos:Producto[];
  private productos$:Subject<Producto[]>;

  constructor(private http:HttpClient) {
    this.importeTotal=0;
    this.productos=[];
    this.productos$=new Subject();
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
    this.http.get('192.168.100.4:8000/').subscribe((resp:any)=>this.productos=resp);
    this.productos$.next(this.productos);
    return this.productos$.asObservable();
   }
}
