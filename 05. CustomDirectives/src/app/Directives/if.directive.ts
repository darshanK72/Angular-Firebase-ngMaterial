import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {

  constructor(private view:TemplateRef<any>,private template:ViewContainerRef) { }

  @Input('appIf') set display(value:boolean){
    if(value){
      this.template.createEmbeddedView(this.view);
    }
    else{
      this.template.clear();
    }
  }

}
