import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  registrarEmpresa(): any {
    this.router.navigate(['/empresa']);
  }

  consultarEmpresa(): any {
    this.router.navigate(['/consultar-empresa']);
  }

  registrarEmpleado(): any {
    this.router.navigate(['/empleado']);
  }

  consultarEmpleado(): any {
    this.router.navigate(['/consultar-empleado']);
  }

}
