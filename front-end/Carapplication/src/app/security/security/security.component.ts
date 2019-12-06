import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from '../services/authenticate.service';
import { UserLogin } from '../models/user-login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {
  model = new UserLogin('','');

  isRegister: boolean = true;

  ngOnInit(){
  }
  constructor(private _authenticateService : AuthenticateService,  private router: Router) {
   }


  submitted : boolean = false;
  message : boolean = false;

  onRegister(){
    this.isRegister = false;
    console.log("to login");
  }

  onLogin() {
    this.isRegister = true;
    console.log("to register");
  }
 
  
  onSubmit() {
    this.submitted = true;
    this.message = false;
    console.log(this.model);

    // if(this.isRegister == true){
      this._authenticateService.authenticate(this.model).subscribe(result => {
        localStorage.setItem("token",result.token);
        localStorage.setItem("id",result.id);
        this._authenticateService.isLoggedin.next(result.token ? true : false);
        console.log("User is logged in!");
        this.router.navigateByUrl('/');
        }, 
        errorResponse => {
            // Login Error
            this.message = true;
            this.submitted = false;
        });
      }
      
  // }
  // else {
  //   this._authenticateService.register(this.model).subscribe(result => {
  //     console.log("user registration");
  //     this.isRegister = false;
  //     });
  // }
  // }
    }
