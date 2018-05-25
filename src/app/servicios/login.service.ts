import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from "@angular/router";
import { Observable, Subject } from 'rxjs';
import * as firebase from 'firebase';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ErrorsHandler } from './error-service-handler.service';

@Injectable()
export class LoginService {

  public sessionChange: Subject<any> = new Subject();
  authState: any = null;
  constructor(private afAuth: AngularFireAuth,
              private router: Router,
              private errorHandler : ErrorsHandler) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth;
      this.notifySessionChange();
    });
  }

  isLoggedIn(){
    if (this.authState == null ) {
      return false;
    } else {
      return true;
    }
  }

  getUserDisplayName(){
    if (!this.authState) { return 'Guest' }
    else { return this.authState['displayName'] || 'User without a Name' }
  }

  registryWithEmailAndPass(email, pass){
    return this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
      .then((user) => {
        this.authState = user;
        this.notifySessionChange();
      })
      .catch(error => {
        this.errorHandler.mostrarError(error);
        this.notifySessionChange();
      });
  }

  signInWithEmailAndPass(email, pass){
    return this.afAuth.auth.signInWithEmailAndPassword(email, pass)
      .then((user) => {
        this.authState = user;
        this.notifySessionChange();
        return true;
      })
      .catch(error => {
        this.errorHandler.mostrarError(error);
        this.notifySessionChange();
      });
  }

  signInWithGoogleMail(){
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.socialSignIn(provider);
  }

  singInWithFacebook(){
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.socialSignIn(provider);
  }

  logout(){
    return this.afAuth.auth.signOut();
  }

  private socialSignIn(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) =>  {
        this.authState = credential.user;
        this.notifySessionChange();
        return true;
      })
      .catch(error => {
        this.errorHandler.mostrarError(error);
        this.notifySessionChange();
        return false;
      });
  }

  private notifySessionChange() {
    this.sessionChange.next(this.authState);
  }

}
