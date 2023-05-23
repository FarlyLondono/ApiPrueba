import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserService]
})
export class HomeComponent implements OnInit, DoCheck {

  public token: any;
  public identity: any;


  constructor(
    private _userService: UserService,
  ) 
  { 
    this.loadUser();
  }

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.loadUser();
  }

  loadUser(){
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    //console.log(this.identity);
  }

}
