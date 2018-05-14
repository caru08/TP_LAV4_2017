import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialogRef } from '@angular/material';

import { LoginService } from '../../servicios/login.service';
import { MessageSnackBarComponent } from '../common-components/message-snackbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user = {email: '', pass:''};
  public loading:boolean;

  constructor( private loginService: LoginService,
               private route: ActivatedRoute,
               private router: Router,
               private messageSnack: MessageSnackBarComponent,
               public dialogRef: MatDialogRef<LoginComponent>) {
  }

  ngOnInit() {
  }

  loginUserPass(){
    this.loading = true;
    this.loginService.signInWithEmailAndPass(this.user.email, this.user.pass)
      .then((res) => {
        if(res){
          this.loginComplete();
        }
      })
      .catch((err) =>{
        console.log('error: ' + err);
        this.loading = false;
      });
  }

  loginWithFacebook(){
    this.loading = true;
    this.loginService.singInWithFacebook()
      .then((res) => {
        this.loginComplete();
      })
      .catch((err) =>{
        console.log('error: ' + err);
        this.loading = false;
      });
  }

  loginWithGmail(){
    this.loading = true;
    this.loginService.signInWithGoogleMail()
      .then((res) => {
        if(res){
          this.loginComplete();
        }
      })
      .catch((err) =>{
        console.log('error: ' + err);
        this.loading = false;
      });
  }

  registrarseClick(){
    this.dialogRef.close('registrarse');
  }

  private loginComplete(){
    this.loading = false;
    this.dialogRef.close();
  }





  // Entrar() {
  //   if (this.usuario === 'admin' && this.clave === 'admin') {
  //     this.router.navigate(['/Principal']);
  //   }
  // }


  MoverBarraDeProgreso() {
    /*this.logeando=false;
     this.clase="progress-bar progress-bar-danger progress-bar-striped active";
     this.progresoMensaje="NSA spy...";
     let timer = TimerObservable.create(200, 50);
     this.subscription = timer.subscribe(t => {
     console.log("inicio");
     this.progreso=this.progreso+1;
     this.ProgresoDeAncho=this.progreso+20+"%";
     switch (this.progreso) {
     case 15:
     this.clase="progress-bar progress-bar-warning progress-bar-striped active";
     this.progresoMensaje="Verificando ADN...";
     break;
     case 30:
     this.clase="progress-bar progress-bar-Info progress-bar-striped active";
     this.progresoMensaje="Adjustando encriptación..";
     break;
     case 60:
     this.clase="progress-bar progress-bar-success progress-bar-striped active";
     this.progresoMensaje="Recompilando Info del dispositivo..";
     break;
     case 75:
     this.clase="progress-bar progress-bar-success progress-bar-striped active";
     this.progresoMensaje="Recompilando claves facebook, gmail, chats..";
     break;
     case 85:
     this.clase="progress-bar progress-bar-success progress-bar-striped active";
     this.progresoMensaje="Instalando KeyLogger..";
     break;

     case 100:
     console.log("final");
     this.subscription.unsubscribe();
     this.Entrar();
     break;
     }
     });
     //this.logeando=true;
     */
  }

}
