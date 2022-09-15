import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'
import { Cliente } from 'src/app/models/producto_model';
import { ApiConsumerService } from 'src/app/services/api-consumer.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  titulo:string='Datos del Cliente';

  clienteForm;
  constructor(private fb:FormBuilder,private service:ApiConsumerService) {
    this.clienteForm=this.fb.group({
      documento:['',Validators.required],
      apellido:['',Validators.required],
      nombre:['',Validators.required],
      domicilio:['',Validators.required],
      telefono:['',Validators.required]
    });
   }

  ngOnInit(): void {
  }

  confirmarPedido(data:Cliente){

    this.service.cliente=data;
    console.log(this.service.cliente);
      this.clienteForm.reset();
  }
}
