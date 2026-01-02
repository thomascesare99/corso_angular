import { Injectable } from '@angular/core';

@Injectable({         // Decorator to define this class as an injectable service
  providedIn: 'root', // This service is available application-wide
})
export class ServizioProva {

  servicePeople = [
    { name: 'Anna', age: 27, color: 'yellow' },
    { name: 'Bob', age: 32, color: 'blue' },
    { name: 'Cathy', age: 29, color: 'orange' }
  ];


}
