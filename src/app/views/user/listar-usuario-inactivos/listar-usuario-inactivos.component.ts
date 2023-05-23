import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { user } from 'src/app/Models/users';
import { UserService } from 'src/app/Services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-listar-usuario-inactivos',
  templateUrl: './listar-usuario-inactivos.component.html',
  styleUrls: ['./listar-usuario-inactivos.component.css'],
  providers: [UserService]
})
export class ListarUsuarioInactivosComponent implements OnInit {

  public identity: any;
  public user: user;
  public token: any;
  public ListadoUsuariosInactivos: any;
  public status!: string;

  

  constructor(
    private _userService: UserService
  ) { 
    this.user = new user('', '', '', '', 0);//tremos los campos del modelo user
  }

  ngOnInit(): void {
    this.getListarUsuarioInactivos();
  }

  getListarUsuarioInactivos() {

    this._userService.getListarUsuarioInactivos(this.token).subscribe(
      response => {
        if (response.status == 'success') {
          this.ListadoUsuariosInactivos = response.data;
          console.log(this.ListadoUsuariosInactivos);


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
