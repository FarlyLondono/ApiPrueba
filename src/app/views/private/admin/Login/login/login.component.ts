import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { user } from 'src/app/Models/users';
import { UserService } from 'src/app/Services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { log } from 'console';

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
    this.logout();
  }

  ingresoForm() {
    return new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  onSubmit() {
  
    //console.log(this.loginForm);

    this._userService.signup(this.loginForm.value).subscribe(
      response => {
        //console.log(response);
        if (response.status == 'error') {

          console.log('Datos Incorrectos del usuario!!');

        }
        //TOKEN condicional
        else {
          this.status = 'success';
          this.token = response;

          //OBJETOS USUARIO IDENTOFICADO
          this._userService.signup(this.loginForm.value, <any>true).subscribe(//traesmos los datos el usuarios identificado
            response => {

              this.identity = response;//se guarda en la variable identity

              //PERSISTIR DATOS DE USUARIO IDENTIFICADO
              //console.log(this.token);
              //console.log(this.identity);
              //console.log(this.identity);
              localStorage.setItem('token', this.token);//guardar datos en el localstorage del navegador
              localStorage.setItem('identity', JSON.stringify(this.identity));


              //REDIRECCION A ALUNA RUTA en este caso usuarios
              console.log('usuario logueado!!');
              this._router.navigate(['inicio']);

            },
            error => {
              this.status = 'error';
              console.log(<any>error);

            });
          }

      }); 
  }




  logout(){
    this._route.params.subscribe(params =>{
      let logout = +params['sure'];


      if(logout == 1){
        localStorage.removeItem('token');
        localStorage.removeItem('identity');

        this.identity = null;
        this.token = null;


        //REDIRECCION A INICIAO
        this._router.navigate(['']);

      }

    });
  }






}
