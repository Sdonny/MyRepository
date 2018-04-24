import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {

  signInForm: FormGroup;
  registrazione : {nome: '', cognome: '',  email: '' , dataDiNascita: '', password: '' , confirmPassword: ''  }
  ngOnInit() {

    this.signInForm = new FormGroup({
       'nome' : new FormControl(this.registrazione.nome,[
          Validators.required,
          Validators.minLength(4),
       ]),
       'cognome' : new FormControl(this.registrazione.cognome,[
           Validators.required ]),
        
       'email' : new FormControl(this.registrazione.email,[
         Validators.required,
         Validators.email
       ]),
       'dataDiNascita' : new FormControl(this.registrazione.dataDiNascita,[
        //Todo Costruire la regular expression per una data , formato itaiano, valida
         Validators.pattern('/\d/')
       ]),
       'password' : new FormControl(this.registrazione.password,[
          Validators.required,
          Validators.minLength(6)
       ]),
       'confirmPassword' : new FormControl(this.registrazione.confirmPassword,[
         Validators.required,
         Validators.minLength(6)
       ])

    })

  } //fine dell' OnInit

  get nome() { return this.signInForm.get('nome'); }
  get cognome() { return this.signInForm.get('cognome'); }
  get email() { return this.signInForm.get('email'); }
  get dataDiNascita() { return this.signInForm.get('dataDiNascita'); }
  get password() { return this.signInForm.get('password'); }
  get cogconfirmPasswordnome() { return this.signInForm.get('confirmPassword'); }
}
