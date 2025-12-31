import { CallExpressionDecorator } from './../../../node_modules/@angular/cdk/schematics/update-tool/utils/decorators.d';
import { Component, Input, OnChanges, OnInit, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-figlio',
  standalone: true,
  imports: [],
  templateUrl: './figlio.html',
  styleUrl: './figlio.css',
})
export class Figlio implements OnInit, OnChanges {
  @Input() people: any; //{ name: string; age: number }[] = []; // Input property to receive data from parent component

  ngOnInit() {
    console.log('Received people:', this.people);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('People input changed:', changes);
  }

  // ---- OUTPUT EXAMPLE ----
  @Output() personSelected = new EventEmitter<{ name: string; age: number, color: string }>(); // Output event emitter

  selectPerson(person: { name: string; age: number, color: string }) { // Method to emit selected person
    this.personSelected.emit(person);
  }
}

