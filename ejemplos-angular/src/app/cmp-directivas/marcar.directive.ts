import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarcar]'
})
export class MarcarDirective implements OnInit {

  @HostBinding('style.backgroundColor') colorDeFondo: string = 'white'
  @Input('appMarcar') color = 'yellow'

  constructor() {
    console.log('Constructor', this.color)
  }

  ngOnInit() {
    console.log('NgOnInit', this.color)
    if (!this.color) {
      this.color = 'yellow'
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.colorDeFondo = this.color
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.colorDeFondo = 'white'
  }

}
