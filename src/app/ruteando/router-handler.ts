import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { LoginService } from '../servicios/login.service';
import { MessageSnackBarComponent } from '../componentes/common-components/message-snackbar.component';

@Injectable()
export class RouterHandler implements CanActivate, CanActivateChild {

  constructor(private router: Router,
              private loginService: LoginService,
              private messageSnack: MessageSnackBarComponent
  ) { }

  canActivate() {
    if ( this.loginService.isLoggedIn() ) {
      return true;
    }
    this.messageSnack.showErrorMessage("No estás logueado");
    this.router.navigate(['/']);
    return false;
  }

  canActivateChild(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean {

    if ( this.loginService.isLoggedIn() ) {
      return true;
    }
    this.messageSnack.showErrorMessage("No estás logueado");
    this.router.navigate(['/']);
    return false;
  }

}
