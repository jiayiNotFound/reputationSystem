import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LocalstoreService } from './localstore.service';


@Injectable({
  providedIn: 'root'
})
export class LoginAuthGuard implements CanActivate {
  constructor(private store:LocalstoreService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let userInfo = this.store.get('loginAuth')
      // console.log("A"+' '+userInfo.username)
      // let userInfo = ''
      if(userInfo.username!=undefined){
        return true
      }
      else{
        alert("please login")
          this.router.navigate(['/login'])
        return false
      }



  }


}
