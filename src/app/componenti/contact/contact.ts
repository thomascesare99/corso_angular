import { Component, OnInit } from '@angular/core';
import { ServizioProva } from '../../servizi/servizio-prova';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [RouterLink, RouterOutlet],
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  people : any;
  isProfile: boolean = false;
  constructor(private servizioProva: ServizioProva, private route: ActivatedRoute) { }
  // Injecting the ServizioProva service and ActivatedRoute to access route parameters

  ngOnInit() {
    this.people = this.servizioProva.getAllPeople();
    console.log('Parameters:', this.route.snapshot.paramMap.get('id'));
  }

}
