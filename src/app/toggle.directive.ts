import { Directive, HostListener, ElementRef, HostBinding } from '@angular/core';


@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective {
  @HostBinding('class.open') clickFlag = false;
  @HostListener('click') toggleOpen(){
    this.clickFlag = !this.clickFlag;
  }

  constructor() { }

}
