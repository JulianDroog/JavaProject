import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../security/services/authenticate.service';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _authService: AuthenticateService, private router: Router) {}
  faSignOutAlt= faSignOutAlt;
  loggedIn : boolean;

  ngOnInit() {
    this._authService.isLoggedin.subscribe(result => {
      this.loggedIn = result;
    })
  }

  logOut(){
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    this.router.navigate(['/login']);
    this._authService.isLoggedin.next(false);
  }

}
