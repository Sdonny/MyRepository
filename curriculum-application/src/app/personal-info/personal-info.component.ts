import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent     implements OnInit 
{


  personalInfoForm: FormGroup;
  nome : String;
  cognome: String; 
  
  /*
  personalInfo = {
    nome: 'Salvatore', cognome: 'Donato', viaeCivico: 'Via Cannizzaro',
    codicePostale: '00156', citta: '', telefonoTipo: '', telefonoNumero: 0
  }
 */

   
    //aggiunto l'NgModal service
    constructor() { }


  ngOnInit() {
    this.personalInfoForm = new FormGroup({
      'nome': new FormControl(this.nome),
      'cognome': new FormControl(this.cognome)
     // 'nome': new FormControl(this.personalInfo.nome),
     // 'cognome': new FormControl(this.personalInfo.cognome),
     // 'viaeCivico': new FormControl(this.personalInfo.viaeCivico),
      //'codicePostale': new FormControl(this.personalInfo.codicePostale)
    });
  }

 // get nome() { return this.personalInfoForm.get('nome'); }
  //get cognome() { return this.personalInfoForm.get('cognome'); }
  //get viaeCivico() { return this.personalInfoForm.get('viaeCivico'); }
  //get codicePostale() { return this.personalInfoForm.get('codicePostale'); }

  getData(message:any){ 

      // this.personalInfoForm.setControl("nome",new FormControl(message.nome));
       //this.personalInfoForm.setControl("cognome",new FormControl(message.cognome));
    
       this.nome=message.nome; 
       this.cognome=message.cognome;
     }

}
