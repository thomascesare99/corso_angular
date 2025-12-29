import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Prova } from "./prova/prova";

@Component({
  // Decorator that defines this class as an Angular component
  selector: "app-root", // The HTML tag used to embed this component: found in index.html
  imports: [Prova], // Importing the Prova component and RouterOutlet for routing
  standalone: true, // Indicates that this is a standalone component
  templateUrl: "./app.html", // Path to the HTML template for this component: in this case the componet is the whole app
  styleUrl: "./app.css",
})
export class App {
  protected readonly title = signal("corso-angular");
}
