import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  isAuthenticated(): boolean {
    var sessionStr = sessionStorage.getItem('ccLoginToken');

    if (sessionStr != null) {
      var lastLoginDate = new Date(sessionStr);
      var curDate = new Date();
      lastLoginDate.setMinutes(lastLoginDate.getMinutes() + 15);
      //15 minute timeout
      if (lastLoginDate > curDate) {
        return true;
      }
    }

    return false;
  }
}