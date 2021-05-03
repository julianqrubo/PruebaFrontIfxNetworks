import { RouterModule, Routes } from '@angular/router';

import { RegistroComponent } from './components/registro/registro.component';
import { RegistroEmpresaComponent } from './components/registro-empresa/registro-empresa.component';
import { RegistroEmpleadoComponent } from './components/registro-empleado/registro-empleado.component';
import { ConsultarEmpresaComponent } from './components/consultar-empresa/consultar-empresa.component';
import { ConsultarEmpleadoComponent } from './components/consultar-empleado/consultar-empleado.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: RegistroComponent },
    { path: 'empresa', component: RegistroEmpresaComponent },
    { path: 'consultar-empresa', component: ConsultarEmpresaComponent },
    { path: 'empleado', component: RegistroEmpleadoComponent },
    { path: 'consultar-empleado', component: ConsultarEmpleadoComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
    { path: '', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
