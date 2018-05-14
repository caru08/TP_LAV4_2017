import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'message-snackbar',
  templateUrl: './message-snackbar.component.html',
})
export class MessageSnackBarComponent {


  constructor(private snackBar: MatSnackBar){
  }

  showSucessMessage(message){
    this.snackBar.open(message, '', {
      duration: 4000, extraClasses: ['success-snackbar']
    });
  }

  showErrorMessage(message){
    this.snackBar.open(message, '', {
      duration: 4000, extraClasses: ['error-snackbar']
    });
  }

  showInfoMessage(message){
    this.snackBar.open(message, '', {
      duration: 4000, extraClasses: ['info-snackbar']
    });
  }

}

