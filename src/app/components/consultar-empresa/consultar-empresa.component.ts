import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consultar-empresa',
  templateUrl: './consultar-empresa.component.html',
  styleUrls: ['./consultar-empresa.component.css']
})
export class ConsultarEmpresaComponent implements OnInit {

  empresas: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    const ENDPOINT = 'http://localhost:9090/ifxnetworks/company/getAll';
    this.http.get(ENDPOINT, {}).subscribe(data => {
      this.empresas = data;
    });
  }

}
