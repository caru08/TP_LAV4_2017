import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { LoginService } from '../../servicios/login.service';
import { LoginComponent } from '../login/login.component'
import { MessageSnackBarComponent } from '../common-components/message-snackbar.component';
import { RegistroComponent } from '../registro/registro.component';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  public isLogged:boolean;
  public userLogged: string;

  constructor(public dialog: MatDialog,
              private messageSnack: MessageSnackBarComponent,
              private loginService: LoginService,
              private router: Router) {}

  ngOnInit() {
    this.loginService.sessionChange.subscribe((session:any) => this.checkLogin());
    this.checkLogin();
  }

  loginClick(){
    let dialogRef = this.dialog.open(LoginComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == 'registrarse'){
        this.registrarseClick();
      }else{
      }
    });
  }

  registrarseClick(){
    let dialogRef = this.dialog.open(RegistroComponent, {
      height: '400px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  logoutClick(){
    this.loginService.logout().then((res) => {
      this.isLogged = false;
      })
      .catch((err) =>{
        console.log('error: ' + err);
        this.messageSnack.showErrorMessage("Ocurrio un error al desloguearse");
      });
  }

  private checkLogin(){
    if ( this.loginService.isLoggedIn() ) {
      this.isLogged = true;
      this.userLogged = this.loginService.getUserDisplayName();
    }
  }


}
