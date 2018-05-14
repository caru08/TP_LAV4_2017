import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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

  constructor(public dialog: MatDialog,
              private messageSnack: MessageSnackBarComponent,
              private router: Router) {}

  ngOnInit() {
  }

  loginClick(){
    let dialogRef = this.dialog.open(LoginComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == 'registrarse'){
        this.messageSnack.showInfoMessage("Redireccionando a pagina de registro");
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

}
