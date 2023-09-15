import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[color]'
})
export class ColorDirective implements OnInit {

  @Input()
  color!:string;

  constructor(private element:ElementRef,private renderer:Renderer2 ) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement,'color',this.color)
  }

}
