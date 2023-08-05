import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appClickOutSide]'
})
export class ClickOutSideDirective {

  constructor(private el: ElementRef) { }

  @Output() onClickOutSide: any = new EventEmitter();
  @HostListener('document:click', ['$event.target'])
  onClick(target: any) {
    let isInSide=this.el.nativeElement.contains(target)
    if (!isInSide) {
      this.onClickOutSide.emit(true);
    }
  }

}
