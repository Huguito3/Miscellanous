import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { CssComponent } from './components/css/css.component';
import { CssClassesComponent } from './components/css-classes/css-classes.component';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { HomeComponent } from './components/home/home.component';
import { APP_ROUTING } from './app.routes';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';
import { UsuarioEditarComponent } from './components/usuario/usuario-editar.component';
import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';


library.add(fas);
@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    CssClassesComponent,
    ResaltadoDirective,
    NgSwitchComponent,
    HomeComponent,
    UsuarioComponent,
    UsuarioNuevoComponent,
    UsuarioEditarComponent,
    UsuarioDetalleComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FontAwesomeModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
