import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[button]'
})
export class ButtonDirective implements OnInit {

  @Input('button') buttonCSS!:{width:string,height:string,padding:string,backgroundColor:string,color:string};

  constructor(private element:ElementRef,private renderer:Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement,'width',this.buttonCSS.width);
    this.renderer.setStyle(this.element.nativeElement,'height',this.buttonCSS.height);
    this.renderer.setStyle(this.element.nativeElement,'padding',this.buttonCSS.padding);
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor',this.buttonCSS.backgroundColor);
    this.renderer.setStyle(this.element.nativeElement,'color',this.buttonCSS.color);
  }

}
