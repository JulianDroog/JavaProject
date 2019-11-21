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
  constructor(private _authenticateService : AuthenticateService, private router: Router) {
   }


  submitted : boolean = false;

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
    console.log(this.model);

    // if(this.isRegister == true){
      this._authenticateService.authenticate(this.model).subscribe(result => {
        localStorage.setItem("token",result.token);
        console.log("User is logged in!");
        this.router.navigateByUrl('/cars');
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
