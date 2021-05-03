import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consultar-empleado',
  templateUrl: './consultar-empleado.component.html',
  styleUrls: ['./consultar-empleado.component.css']
})
export class ConsultarEmpleadoComponent implements OnInit {

  empleados: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    const ENDPOINT = 'http://localhost:9090/ifxnetworks/employee/getAll';
    this.http.get(ENDPOINT, {}).subscribe(data => {
      this.empleados = data;
    });
  }

}
