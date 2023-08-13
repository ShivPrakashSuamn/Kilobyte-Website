import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  url: any;
  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isLoggedIn = localStorage.getItem('isLoggedIn');
    this.url = route.routeConfig?.path;
    let arr = ["auth/login"];
    if (isLoggedIn) {
      if (arr.includes(this.url)) {
        console.log('redirect for dashboard')
        return this.router.navigate(['/users']);
      } else {
        return true;
      }
    } else {
      return this.router.navigate(['/auth/login']);
    }
  }
}
