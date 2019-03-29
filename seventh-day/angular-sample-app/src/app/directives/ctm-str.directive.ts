import { SimpleChanges, Directive, TemplateRef, ViewContainerRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[ctmStr]'
})
export class CtmStrDirective implements OnChanges {

  @Input('ctmStr')
  con: boolean

  constructor(
    private tmRf: TemplateRef<any>,
    private vcRf: ViewContainerRef
  ) { }

  ngOnChanges(ch: SimpleChanges) {
    if(!this.con) {
      this.vcRf.createEmbeddedView(this.tmRf)
    }else {
      this.vcRf.clear()
    }
  }
}
