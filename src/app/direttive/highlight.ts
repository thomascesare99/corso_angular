import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {
  @Input() appHighlight: string = '';

  constructor(private element: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor(this.appHighlight);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor('transparent');
  }

  changeColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }

}
