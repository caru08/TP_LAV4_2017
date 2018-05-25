import { Injectable } from "@angular/core";
import { MessageSnackBarComponent } from '../componentes/common-components/message-snackbar.component';

@Injectable()
export class ErrorsHandler{

  static knownErrors:any = [
    {
      code:'auth/email-already-in-use',
      message:"El email ya existe"
    },
    {
      code:'auth/user-not-found',
      message:"El email no se encuentra registrado"
    },
    {
      code:'auth/wrong-password',
      message:"Contraseña Incorrecta"
    },
    {
      code: "auth/network-request-failed",
      message: "No hay conexión a internet"
    },
    {
      code: "auth/popup-closed-by-user",
      message: "No te logueaste"
    }
  ]

  constructor(private messageSnack: MessageSnackBarComponent){
  }

  private getErrorMessage(error){
    var mensaje = "Error desconocido";
    for(var i=0; i< ErrorsHandler.knownErrors.length; i++){
      if(error.code == ErrorsHandler.knownErrors[i].code){
        mensaje = ErrorsHandler.knownErrors[i].message;
        break;
      }
    }
    return mensaje;
  }

  public mostrarError(error, title?, message?){
    console.log("ocurrio un error", error);
    var errorMessage = this.getErrorMessage(error);
    this.messageSnack.showErrorMessage(errorMessage);
  }

}
