import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from "@angular/router";
import * as firebase from 'firebase';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ErrorsHandler } from './error-service-handler.service';

@Injectable()
export class LoginService {

  authState: any = null;
  constructor(private afAuth: AngularFireAuth,
              private router: Router,
              private errorHandler : ErrorsHandler) {

    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth
    });
  }

  isLoggedIn(){
    if (this.authState == null ) {
      return false;
    } else {
      return true;
    }
  }

  currentUserDisplayName(){
    if (!this.authState) { return 'Guest' }
    else { return this.authState['displayName'] || 'User without a Name' }
  }

  registryWithEmailAndPass(email, pass){
    return this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
      .then((user) => {
        this.authState = user
      })
      .catch(error => this.errorHandler.mostrarError(error));
  }

  signInWithEmailAndPass(email, pass){
    return this.afAuth.auth.signInWithEmailAndPassword(email, pass)
      .then((user) => {
        this.authState = user;
        return true;
      })
      .catch(error => this.errorHandler.mostrarError(error));
  }

  signInWithGoogleMail(){
    debugger;
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.socialSignIn(provider);
  }

  singInWithFacebook(){
    debugger;
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.socialSignIn(provider);
  }

  private socialSignIn(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) =>  {
        this.authState = credential.user;
        return true;
      })
      .catch(error => this.errorHandler.mostrarError(error));
  }

  logout(){
    this.afAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));
  }

}
