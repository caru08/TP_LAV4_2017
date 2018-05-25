import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public acepto:boolean;
  constructor(public dialogRef: MatDialogRef<RegistroComponent>) {
    this.acepto = false;
  }

  ngOnInit() {
  }

  noAceptoClick(){
    this.dialogRef.close();
  }

  aceptaCondiciones(){
    this.acepto = true;
  }

}
