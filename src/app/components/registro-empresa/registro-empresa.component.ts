import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro-empresa',
  templateUrl: './registro-empresa.component.html',
  styleUrls: ['./registro-empresa.component.css']
})
export class RegistroEmpresaComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  guardarEmpresa(nit: number, name: string): void {
    if (!nit){
      alert('El nit es requerido');
    }else{
      const NITRGX = /^\d*$/i;
      if (!NITRGX.test(nit + '')) {
        alert('Nit inválido');
      }
    }
    if (!name || name.trim() === ''){
      alert('El nombre es requerido');
    }
    const ENDPOINT = 'http://localhost:9090/ifxnetworks/company/create';
    const params = {
      nit,
      name
    };
    this.http.post(ENDPOINT, params).subscribe(data => {
      console.log('Se creo el registro con id=== ', data);
      alert('Registro guardado con exito!!');
    });
  }

}
