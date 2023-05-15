import { NgModule } from "@angular/core";
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from '../app/views/private/admin/Login/login/login.component';




const appRoutes: Routes = [
    {path:'login', component: LoginComponent},
    //{path:'logout/:sure', component: LoginComponent},
    //{path:'registro', component: RegisterComponent}, // esta funciona con doble: //registro
    //{path:'usuarios', component: ListarComponent},

    //{path:'servicios/regitrar', component: RegisterServicioComponent},
    //{path:'servicios', component: ListarServiciosComponent},

    //{path:'citas', component: ListarCitasComponent},

    //{path:'**', component: ErrorComponent}

];


//ESPORTAR CONFIGURACUIONES
export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
//export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);