import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { user } from 'src/app/Models/users';
import { UserService } from 'src/app/Services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  public pagina: string;//prueba para nombre el componente

  public user: user;
  public status!: string;
  public token: any;
  public identity: any;

  public loginForm: FormGroup;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {
    this.pagina = 'Camino al logro';//Prueba nombre del componente

    this.user = new user('', '', '', '', 0);//tremos los campos del modelo user
    this.loginForm = this.ingresoForm();
  }

  ngOnInit(): void {
  }

  ingresoForm() {
    return new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  onSubmit() {
  
    console.log(this.loginForm);
    this._userService.signup(this.loginForm).subscribe(
      response => {

        //console.log(response);prueba al resivir datos suuarios

        this.identity = response;//se guarda en la variable identity

        //PERSISTIR DATOS DE USUARIO IDENTIFICADO
        console.log(this.token);
        console.log(this.identity);
        localStorage.setItem('token', this.token);//guardar datos en el localstorage del navegador
        localStorage.setItem('identity', JSON.stringify(this.identity));
        //localStorage.setItem('identity', this.identity);
        /*Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Hola',
          text: 'Bienvenido!!',
          showConfirmButton: false,
          timer: 1500
        })*/

        //REDIRECCION A ALUNA RUTA en este caso usuarios
        //this.toastr.success('Bienvenido!!');
        //this._router.navigate(['inicio']);
        console.log('logueado');

      },
      error => {
        this.status = 'error';
        console.log(<any>error);
      }
    );


  }

}
