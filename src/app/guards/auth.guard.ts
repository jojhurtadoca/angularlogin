import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if (this.authService.isLoggedIn()) {
      if(state.url === '/login' || state.url === '/'){
        console.log('pase por acá');
        this.router.navigate(['/dashboard']);
      }
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
