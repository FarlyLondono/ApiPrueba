import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { user } from 'src/app/Models/users';
import { UserService } from 'src/app/Services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css'],
  providers: [UserService]
})
export class ListarUsuarioComponent implements OnInit {

  public identity: any;
  public user: user;
  public token: any;
  public ListadoUsuarios: any;
  public status!: string;

  

  constructor(
    private _userService: UserService
  ) { 
    this.user = new user('', '', '', '', 0);//tremos los campos del modelo user
  }

  ngOnInit(): void {
    this.getListarUsuario();
  }

  getListarUsuario() {

    this._userService.getListarUsuario(this.token).subscribe(
      response => {
        if (response.status == 'success') {
          this.ListadoUsuarios = response.data;
          console.log(this.ListadoUsuarios);


        } else {
          this.status = 'error';
        }
        //console.log(response);

      },
      error => {
        this.status = 'error';
        console.log(<any>error);
      }


    );



  }




}
