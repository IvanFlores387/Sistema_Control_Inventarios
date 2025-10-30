import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { CrearProductoComponent } from './screens/crear-producto/crear-producto.component';
import { ListaComponent } from './screens/lista/lista.component';
import { EditarProductoComponent } from './screens/editar-producto/editar-producto.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { GestionarUsuariosComponent } from './screens/gestionar-usuarios/gestionar-usuarios.component';
import { EditarUsuarioComponent } from './screens/editar-usuario/editar-usuario.component';
import { CrearUsuarioComponent } from './screens/crear-usuario/crear-usuario.component';
import { AuthGuard } from './guards/auth.guard';
import { RegistroEntradaComponent } from './screens/registro-entrada/registro-entrada.component';
import { RegistroSalidasComponent } from './screens/registro-salidas/registro-salidas.component';
import { HistorialMovimientosComponent } from './screens/historial-movimientos/historial-movimientos.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, pathMatch: 'full'},
  { path: 'crear', component: CrearProductoComponent, canActivate: [AuthGuard],data:  {role: 'Superadmin'}},
  { path: 'listap', component: ListaComponent, pathMatch: 'full'},
  {path: 'editarp/:sku', component: EditarProductoComponent, canActivate: [AuthGuard],data:  {role: 'Superadmin'}},
  {path: 'login', component: LoginScreenComponent, pathMatch: 'full'},
  {path: 'gestionarusuarios', component: GestionarUsuariosComponent, canActivate: [AuthGuard],data:  {role: 'Superadmin'}},
  {path: 'admin/usuarios/editar/:id', component: EditarUsuarioComponent, canActivate: [AuthGuard],data:  {role: 'Superadmin'}},
  {path: 'crearusuario', component: CrearUsuarioComponent, canActivate: [AuthGuard],data:  {role: 'Superadmin'}},
  {path: 'entradas', component: RegistroEntradaComponent, pathMatch: 'full'},
  {path: 'salidas', component: RegistroSalidasComponent, pathMatch: 'full'},
  {path: 'historial', component: HistorialMovimientosComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
