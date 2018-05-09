import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserFormComponent } from './user-form/user-form.component';
import {FormsModule }    from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
//import { ForbiddenValidatorDirective } from './reactive/forbidden-name.directive';
import {ReactiveFormsModule} from '@angular/forms';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
//import {PasswordValidator} from './reactive/password-validator';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalOptions } from './modal-options';


@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],


  declarations: [
    AppComponent,
    HomeComponent,
    UserFormComponent,
    RegistrazioneComponent,
    CurriculumVitaeComponent,
    PersonalInfoComponent,
     NgbdModalOptions
    //PasswordValidator
   // MalformedMailReactives
  ],

  providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
