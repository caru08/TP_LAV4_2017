import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { LoginService } from '../servicios/login.service';

@Injectable()
export class RouterHandler implements CanActivate {

  constructor(private router: Router, private loginService: LoginService) { }
  canActivate() {
    debugger;
    if ( this.loginService.isLoggedIn() ) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }

}
