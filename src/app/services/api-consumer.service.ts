import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto_model';

@Injectable({
  providedIn: 'root'
})
export class ApiConsumerService {

  constructor(private http:HttpClient) {

   }


   public getProductos(): Observable<any>{
    return this.http.get('localhost:8000/productos');
   }
}
