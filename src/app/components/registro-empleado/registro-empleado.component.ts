import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
@Component({
  selector: 'app-registro-empleado',
  templateUrl: './registro-empleado.component.html',
  styleUrls: ['./registro-empleado.component.css']
})
export class RegistroEmpleadoComponent implements OnInit {

  empresas: any;
  clientId: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    const ENDPOINT = 'http://localhost:9090/ifxnetworks/company/getAll';
    this.http.get(ENDPOINT, {}).subscribe(data => {
      this.empresas = data;
    });
  }

  guardarEmpleado(document: number, name: string, email: string, phone: number, company: string): any {
    if (!document){
      alert('El nit es requerido');
    }else{
      const DOCUMENTRGX = /^\d*$/i;
      if (!DOCUMENTRGX.test(document + '')) {
        alert('Nit inválido');
      }
    }
    if (!name || name.trim() === ''){
      alert('El nombre es requerido');
    }
    if (phone){
      const PHONERGX = /^\d*$/i;
      if (!PHONERGX.test(phone + '')) {
        alert('Número inválido');
      }
    }
    const COMPANYID = company.split(':')[0];
    const ENDPOINT = 'http://localhost:9090/ifxnetworks/employee/create/' + COMPANYID;
    const params = {
      document,
      name,
      email,
      phone
    };
    this.http.post(ENDPOINT, params).subscribe(data => {
      alert('Registro guardado con exito!!');
    });

  }

}
