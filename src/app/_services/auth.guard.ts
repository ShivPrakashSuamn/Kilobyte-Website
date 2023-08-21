import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  url: any;

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isLoggedIn = localStorage.getItem('isLoggedIn');
    this.url = route.routeConfig?.path;
    let arr = ["auth/login"];
    if (isLoggedIn && !arr.includes(this.url)) {  /// login && not include url
      return true;
    } else if (isLoggedIn && arr.includes(this.url)) { // login && include url then redirect
      return this.router.navigate(['/users']);
    }else if (!isLoggedIn && arr.includes(this.url)) { // not login && include url
      return true;
    }else {  // not login and not include url
      return this.router.navigate(['/auth/login']);
    }
  }
}
