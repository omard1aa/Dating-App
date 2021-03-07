import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, NavigationEnd } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AccountService } from '../services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  /**
   *
   */
   previousUrl: string;
  constructor(private accountService: AccountService, private toastr: ToastrService, private router: Router) {}
  canActivate(): Observable<boolean> {
    return this.accountService.currentUser$.pipe(
      map(user => {
        if (user) return true;
        this.toastr.warning('You are not authorized.');
        const url = this.router.url;
        this.router.navigateByUrl(this.previousUrl);
      })
    )
  }
  
}
