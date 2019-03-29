import { EventEmitter, Directive, HostBinding, HostListener, Output, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[drp]'
})
export class DrpDirective {

  @HostBinding('class.show')
  isSh: boolean

  // @Output()
  // em : EventEmitter<boolean> = new EventEmitter()

  constructor(
    private elRef: ElementRef,
    private rend: Renderer2
  ) {

  }

  @HostListener('click')
  drpClk() {
    this.isSh = !this.isSh
    console.log(this.elRef.nativeElement.children[1])
    if (this.isSh) {
      // this.elRef.nativeElement.childNodes.item(1).className="dropdown-menu show"
      this.rend.addClass(this.elRef.nativeElement.children[1], 'dropdown-menu')
      this.rend.addClass(this.elRef.nativeElement.children[1], 'show')
    } else {
      // this.elRef.nativeElement.childNodes.item(1).className="dropdown-menu"
      this.rend.removeClass(this.elRef.nativeElement.children[1], 'show')
    }
    // this.em.emit(this.isSh)
  }
}
