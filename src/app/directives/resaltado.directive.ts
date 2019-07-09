import { Directive, ElementRef, HostListener, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el: ElementRef, private renderer: Renderer) {
    console.log('Directiva Chamada');
    // el.nativeElement.style.backgroundColor = 'yellow';
  }
  @Input('appResaltado') nuevoColor: string;
  @HostListener('mouseenter') mouseEntro() {
    console.log(`Mouse over - color ${this.nuevoColor}`);
    this.resaltar(this.nuevoColor || 'yellow');
    // this.el.nativeElement.style.backgroundColor = this.nuevoColor;
  }
  @HostListener('mouseleave') mouseSalio() {
    console.log(`Mouse leave - color ${this.nuevoColor}`);
    // this.el.nativeElement.style.backgroundColor = null;
    this.resaltar(this.nuevoColor || 'yellow');
  }
  private resaltar(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
