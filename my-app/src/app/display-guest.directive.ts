import { Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appDisplayGuest]'
})
export class DisplayGuestDirective {

  @Input() set appDisplayGuest(condition:boolean) {
    if (condition) {
        this.vwRef.createEmbeddedView(this.tplRef);
    } else {
      this.vwRef.clear();
    }
  }

  constructor(private tplRef: TemplateRef<any>, private vwRef: ViewContainerRef) { }

}
