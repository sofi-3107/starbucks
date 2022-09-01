import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Producto } from '../models/producto_model';

@Injectable({
  providedIn: 'root'
})
export class ApiConsumerService {

  private handleError(error:HttpErrorResponse){
    if(error.status==0){
      console.error('Error: ',error.message);
    }else{
      console.error('Error codigo: ',error.message);
    }
    return throwError(()=>new Error('Ha ocurrido un error inesperado'));
  }

  constructor(private http:HttpClient) {

   }


   public getProductos(): Observable<any>{
    return this.http.get('http://192.168.0.179:8000/productos')
        .pipe(catchError(this.handleError));
   }
}
