import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RegistroEmpresaComponent } from './components/registro-empresa/registro-empresa.component';
import { RegistroEmpleadoComponent } from './components/registro-empleado/registro-empleado.component';
import { ConsultarEmpleadoComponent } from './components/consultar-empleado/consultar-empleado.component';
import { ConsultarEmpresaComponent } from './components/consultar-empresa/consultar-empresa.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    RegistroEmpresaComponent,
    RegistroEmpleadoComponent,
    ConsultarEmpleadoComponent,
    ConsultarEmpresaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
