import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {UserService} from "../services/user.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private router:Router,private userService: UserService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Check if user is signed in
    if (this.userService.getUserToken()){
      // TODO: check if the router url is on the authorized items or not
      // TODO: if yes return true
      // TODO: if not redirect to not authorized page
      return true;
    } else {
      this.router.navigateByUrl('/home').then();
      return false;
    }
  }
}
