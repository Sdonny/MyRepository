import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UserFormComponent} from './user-form/user-form.component';
import {RegistrazioneComponent} from './registrazione/registrazione.component';
import {CurriculumVitaeComponent} from './curriculum-vitae/curriculum-vitae.component';

const routes: Routes  = [
{path: '' , redirectTo:'/home'  ,pathMatch:'full'},
{path: 'home' , component: HomeComponent},
{path: 'user' , component: UserFormComponent},
{path:'registrazione' , component: RegistrazioneComponent},
{path:'curriculumVitae', component: CurriculumVitaeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
