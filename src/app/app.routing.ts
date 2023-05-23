import { NgModule } from "@angular/core";
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from '../app/views/private/admin/Login/login/login.component';
import { HomeComponent } from '../app/views/home/home.component';
import { ListarUsuarioComponent } from '../app/views/user/listar-usuario/listar-usuario.component';
import { ListarUsuarioInactivosComponent } from '../app/views/user/listar-usuario-inactivos/listar-usuario-inactivos.component';




const appRoutes: Routes = [
    {path:'', component: LoginComponent},
    //{path:'logout/:sure', component: LoginComponent},
    {path:'admin', component: ListarUsuarioComponent},
    {path:'inactivos', component: ListarUsuarioInactivosComponent},
    {path:'inicio', component: HomeComponent},

    //{path:'servicios/regitrar', component: RegisterServicioComponent},
    //{path:'servicios', component: ListarServiciosComponent},

    //{path:'citas', component: ListarCitasComponent},

    //{path:'**', component: ErrorComponent}

];


//ESPORTAR CONFIGURACUIONES
export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
//export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);