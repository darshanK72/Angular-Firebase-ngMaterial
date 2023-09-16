import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) { }

  @Input('appStyle') set display(value:Object){
    let entries = Object.entries(value);
    console.log(entries);
    for(let item of entries){
      this.renderer.setStyle(this.element.nativeElement,item[0],item[1]);
    }
  }

}
