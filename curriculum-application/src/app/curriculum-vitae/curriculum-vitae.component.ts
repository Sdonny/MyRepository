import { Component, OnInit } from '@angular/core';
import {InformazioniPersonali} from '../informazioniPersonali';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-curriculumVitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.css']
})
export class CurriculumVitaeComponent implements OnInit {


  personalInfo = {nome:'Salvatore', cognome: '', viaeCivico:'Via Cannizzaro' , 
     codicePostale: 0 , citta: '', telefonoTipo:'', telefonoNumero: 0}
  
  personalInfoForm : FormGroup;  
     constructor() { }


  ngOnInit() {
    this.personalInfoForm = new FormGroup({ this.personalInfo
    })
  }

}
