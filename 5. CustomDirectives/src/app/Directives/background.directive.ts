import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[background]'
})
export class BackgroundDirective implements OnInit{

  @Input()
  background!:string;

  constructor(private element:ElementRef,private renderer:Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor',this.background);
  }

}
