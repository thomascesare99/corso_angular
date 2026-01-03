import { Component, signal } from "@angular/core";
import { RouterOutlet, RouterLink } from "@angular/router";
import { Prova } from "./prova/prova";
import { Figlio } from "./figlio/figlio";
import { Highlight } from "./direttive/highlight";
import { UpperCasePipe, DatePipe } from "@angular/common";
import { ProvaServizi } from "./prova-servizi/prova-servizi";

import { About } from "./componenti/about/about";
import { Contact } from "./componenti/contact/contact";
import { Contatto } from "./componenti/contatto/contatto";
import { Home } from "./componenti/home/home";

@Component({
  // Decorator that defines this class as an Angular component
  selector: "app-root", // The HTML tag used to embed this component: found in index.html
  imports: [Prova,
    Figlio,
    Highlight,
    UpperCasePipe,
    DatePipe,
    ProvaServizi,
    About,
    Contact,
    Home,
    Contatto,
    RouterOutlet,
    RouterLink],
  standalone: true, // Indicates that this is a standalone component
  templateUrl: "./app.html", // Path to the HTML template for this component: in this case the componet is the whole app
  styleUrl: "./app.css",
})
export class App {
  protected readonly title = signal("corso-angular");

  today = Date.now();

  colorDirective = 'purple';
  changeHighlightColor(color: string) {
    this.colorDirective = color; // Update the directive color based on user selection
  }

  appPeople = [
    { name: 'Mario', age: 30, color: 'red' },
    { name: 'Luigi', age: 28, color: 'green' },
    { name: 'Peach', age: 25, color: 'pink' }
  ];

  onClick() {
    this.appPeople.push({ name: 'Toad', age: 22, color: 'blue' });
    console.log('Button clicked! Added Toad to people.');

  }

  onPersonReceived(person: { name: string; age: number, color: string }) {
    console.log('Person received from Figlio component:', person);
  }
}
