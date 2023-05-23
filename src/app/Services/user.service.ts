import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { user } from 'src/app/Models/users';
import { environment } from 'src/environments/environment';

@Injectable()

export class UserService {

    public url: string;//creamos una variable con la url
    public identity: any;//VARIAVLE PARA EL IDENTITY
    public token: any;//VARIABLE PARA EL TOKEN

    constructor(
        public _http: HttpClient
    ) {
        this.url = environment.url;
    }

    test() {
        return "hola farly desde un servicio!!";
    }

    //LISTAR USUARIO
    getListarUsuario(token: any): Observable<any> {

        
        //let headers = new HttpHeaders().set('Authorization', token)
        //.set('Content-Type', 'application/x-www-form-urlencoded');
        
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        
        
        return this._http.get(this.url + 'user', { headers: headers });
        
    }

    //LISTAR USUARIO
    getListarUsuarioInactivos(token: any): Observable<any> {

        
        //let headers = new HttpHeaders().set('Authorization', token)
        //.set('Content-Type', 'application/x-www-form-urlencoded');
        
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        
        
        return this._http.get(this.url + 'userinactivos', { headers: headers });
        
    }

    //LOGIN
    signup(user: any, gettoken = null): Observable<any> {
        if (gettoken != null) {
            user.gettoken = 'true';
        }

        let headers = new HttpHeaders()
        headers.set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post(this.url + 'login', user, { headers: headers });

    }




}