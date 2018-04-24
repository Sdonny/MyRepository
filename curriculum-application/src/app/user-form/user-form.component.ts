import { Component,  OnInit} from '@angular/core';
import { User } from '../user';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {PasswordValidator} from '../reactive/password-validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent  implements OnInit{
  // model  = { username:  'Paperino', password :''};

  user = {username:'', password:''};
  userForm: FormGroup;
  //router usato per la navigazione
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      'username': new FormControl(this.user.username, [
        Validators.required,
        Validators.minLength(6)
       // forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
      ]),
      'password': new FormControl(this.user.password, [
        Validators.required,
        PasswordValidator.strong
      ]),
    });
  }

  login() {
     //Todo implementare la logica della login , con la chiamata ad u servizio
       this.gotoHomePage;
  }

  gotoHomePage(){
        this.router.navigateByUrl('/curriculumVitae');

  }

  get username() { return this.userForm.get('username'); }
  get password() {return this.userForm.get('password'); }
 }
