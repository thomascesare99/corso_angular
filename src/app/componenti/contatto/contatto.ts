import { ServizioProva } from './../../servizi/servizio-prova';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contatto',
  imports: [],
  templateUrl: './contatto.html',
  styleUrl: './contatto.css',
})
export class Contatto implements OnInit {
  person: any;
  id: number = 0;

  constructor(private route: ActivatedRoute, private servizioProva: ServizioProva) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = parseInt(params.get('id')!); // Get the 'id' parameter from the route
      this.person = this.servizioProva.getPerson(this.id); // Fetch the person details using the service
    });
    //this.id = parseInt(this.route.snapshot.paramMap.get('id')!); // Get the 'id' parameter from the route
    //this.person = this.servizioProva.getPerson(this.id); // Fetch the person details using the service
  }

}
