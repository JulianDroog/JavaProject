import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from './security/services/authenticate.service';

@Injectable({
providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(private _authenticateService: AuthenticateService, private router : Router) { }
canActivate(
next: ActivatedRouteSnapshot,
state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
if (this._authenticateService.isLoggedIn()) {
return true;
} else {
this.router.navigate(['/security']);
}
}
}