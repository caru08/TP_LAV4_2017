import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatIconModule, MatFormFieldModule, MatInputModule,
  MatDialogModule,  MatButtonModule, MatButtonToggleModule, MatSnackBarModule, MatMenuModule
} from '@angular/material';

//PIRMER NG
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { AgmCoreModule } from '@agm/core';
import { RouterModule, Routes } from '@angular/router';

//FIREBASE
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';


// MIS COMPONENTES
import { AppComponent } from './app.component';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { ListadoDeResultadosComponent } from './componentes/listado-de-resultados/listado-de-resultados.component';
import { LoginComponent } from './componentes/login/login.component';
import { ArchivosJugadoresService } from './servicios/archivos-jugadores.service';
import { ErrorComponent } from './componentes/error/error.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { AdivinaMasListadoComponent } from './componentes/adivina-mas-listado/adivina-mas-listado.component';
import { AgilidadMasListadoComponent } from './componentes/agilidad-mas-listado/agilidad-mas-listado.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { JugadoresListadoComponent } from './componentes/jugadores-listado/jugadores-listado.component';
import { ListadosComponent } from './componentes/listados/listados.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { MenuCardComponent } from './componentes/menu-card/menu-card.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
import { MapaDeGoogleComponent } from './componentes/mapa-de-google/mapa-de-google.component';
import { InputJugadoresComponent } from './componentes/input-jugadores/input-jugadores.component';

//COMMON COMPONENTS
import { MessageSnackBarComponent } from './componentes/common-components/message-snackbar.component';
import { LoaderCircleComponent } from './componentes/common-components/loader-circle.component';

//ROOTERS
import { RuteandoModule } from './ruteando/ruteando.module';
import { RouterHandler } from './ruteando/router-handler';

//SERVICIOS
import { MiHttpService } from './servicios/mi-http.service';
import { JugadoresService } from './servicios/jugadores.service';
import { JuegoServiceService } from './servicios/juego-service.service';
import { LoginService } from './servicios/login.service';
import { ErrorsHandler } from './servicios/error-service-handler.service';

//pipes / tools
import { SexoPipe } from './pipes/sexo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdivinaElNumeroComponent,
    ListadoDeResultadosComponent,
    ErrorComponent,
    PrincipalComponent,
    LoginComponent,
    AgilidadAritmeticaComponent,
    MenuComponent,
    AdivinaMasListadoComponent,
    AgilidadMasListadoComponent,
    ListadoComponent,
    ListadosComponent,
    JuegosComponent,
    RegistroComponent,
    MenuCardComponent,
    CabeceraComponent,
    QuienSoyComponent,
    AnagramaComponent,
    MapaDeGoogleComponent,
    JugadoresListadoComponent,
    InputJugadoresComponent,
    MessageSnackBarComponent,
    LoaderCircleComponent,
    SexoPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    RuteandoModule,
    HttpModule,
    MatDialogModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    MatMenuModule,

    //ng prima
    InputTextModule,
    ButtonModule,
    //firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB6f8x4IjRlesQ3oETc6BXYQHVRTOlY3Ys'
    })
  ],
  exports: [
    MatIconModule
  ],
  providers: [
    JuegoServiceService,
    MiHttpService,
    ArchivosJugadoresService,
    JugadoresService,
    RouterHandler,
    LoginService,
    ErrorsHandler,
    MessageSnackBarComponent
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents:[
    LoginComponent,
    RegistroComponent
  ]

})
export class AppModule { }
