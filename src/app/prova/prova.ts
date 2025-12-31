import { signal } from '@angular/core';
import { Component, OnInit, DoCheck, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { form } from '@angular/forms/signals';



@Component({
  selector: 'app-prova',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatInputModule,
    FormsModule, // Import FormsModule to use ngModel
    MatFormFieldModule
],
  templateUrl: './prova.html',
  styleUrl: './prova.css',
})

export class Prova implements OnInit, DoCheck, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  signal = signal('valore iniziale del segnale')
  name = 'prova componente'
  title = 'Componente di Prova'
  dogs = [
    { name: 'Buddy', breed: 'Golden Retriever', description: 'A friendly and energetic dog.', image: 'https://material.angular.dev/assets/img/examples/shiba1.jpg', isOnline: true },
    { name: 'Max', breed: 'German Shepherd', description: 'A loyal and intelligent companion.', image: 'https://material.angular.dev/assets/img/examples/shiba2.jpg', isOnline: false },
    { name: 'Bella', breed: 'Labrador Retriever', description: 'A friendly and energetic dog.', image: 'https://material.angular.dev/assets/img/examples/shiba1.jpg', isOnline: true },
    { name: 'Lucy', breed: 'Bulldog', description: 'A calm and friendly dog.', image: 'https://material.angular.dev/assets/img/examples/shiba2.jpg', isOnline: false },
    { name: 'Charlie', breed: 'Beagle', description: 'A curious and friendly dog.', image: 'https://material.angular.dev/assets/img/examples/shiba1.jpg', isOnline: true },
  ]
  isDisabled = false
  img1 = 'https://material.angular.dev/assets/img/examples/shiba1.jpg'
  img2 = 'https://material.angular.dev/assets/img/examples/shiba2.jpg'
  immagine = this.img1
  isVisible = false
  onClick() {
    //alert('Hai cliccato il pulsante!')
    this.name = 'ho cliccato il pulsante' // Example action: update the name property
  }

  onInput(event: Event) {
    console.log('Input value:', (<HTMLInputElement>event.target).value); // or (event.target as HTMLInputElement).value: need to cast to HTMLInputElement to access 'value' property
  }

  onSignalInput(event: Event) {
    this.signal.set((<HTMLInputElement>event.target).value);
  }

  ngOnInit(): void {
    // Initialization logic can go here
    console.log('Prova component initialized');
    // let counter = 0;
    // setInterval(() => {
    //   this.isDisabled = !this.isDisabled
    //   if (counter % 2 === 0) {
    //     this.immagine = this.img1
    //   } else {
    //     this.immagine = this.img2
    //   }
    //   counter++;
    // }, 2000);
  }

  ngDoCheck(): void {
    // Custom change detection logic can go here
    console.log('Prova component change detection');
  }

  ngOnChanges(): void {
    // Logic to handle input property changes can go here
    console.log('Prova component input properties changed');
  }

  ngAfterContentInit(): void {
    // Logic after content projection can go here
    console.log('Prova component content initialized');
  }

  ngAfterContentChecked(): void {
    // Logic after content checked can go here
    console.log('Prova component content checked');
  }

  ngAfterViewInit(): void {
    // Logic after view initialization can go here
    console.log('Prova component view initialized');
  }

  ngAfterViewChecked(): void {
    // Logic after view checked can go here
    console.log('Prova component view checked');
  }

  ngOnDestroy(): void {
    // Cleanup logic can go here
    console.log('Prova component destroyed');
  }
}
