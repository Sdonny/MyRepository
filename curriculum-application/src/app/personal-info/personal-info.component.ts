import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  personalInfo = {
    nome: 'Salvatore', cognome: '', viaeCivico: 'Via Cannizzaro',
    codicePostale: 0, citta: '', telefonoTipo: '', telefonoNumero: 0
  }

  personalInfoForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.personalInfoForm = new FormGroup({
      'nome': new FormControl(this.personalInfo.nome),
      'cognome': new FormControl(this.personalInfo.cognome),
      'viaeCivico': new FormControl(this.personalInfo.viaeCivico),
      'codicePostale': new FormControl(this.personalInfo.codicePostale)
    });
  }

}
