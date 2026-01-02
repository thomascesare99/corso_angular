import { ServizioProva } from './../servizi/servizio-prova';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prova-servizi',
  imports: [],
  templateUrl: './prova-servizi.html',
  styleUrl: './prova-servizi.css',
})
export class ProvaServizi implements OnInit {
  constructor(private servizioProva: ServizioProva) { // Injecting the ServizioProva service
  }

  ngOnInit(): void {
    console.log(this.servizioProva.servicePeople); // Logging the servicePeople array from the service
  }

}

