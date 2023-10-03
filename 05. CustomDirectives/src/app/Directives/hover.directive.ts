import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit{

  constructor(private element:ElementRef,private renderer:Renderer2) { }

  ngOnInit(): void {
    
  }

  @HostListener('mouseenter') OnMouseEnter(){
    console.log("mouse enter")
    this.renderer.removeStyle(this.element.nativeElement,'backgroundColor');
    this.renderer.addClass(this.element.nativeElement,'red-background');
    this.renderer.removeClass(this.element.nativeElement,'yellow-background');
  }

  @HostListener('mouseout') OnMouseLeave(){
    console.log("mouse out");
    this.renderer.addClass(this.element.nativeElement,'yellow-background');
    this.renderer.removeClass(this.element.nativeElement,'red-background');
  }

}
