import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[disabled]'
})
export class DisabledDirective implements OnInit{

  constructor(private element:ElementRef,private renderer:Renderer2 ) { }

  ngOnInit(): void {
    
  }

  @Input() set disabled(isDisabled:boolean){
    if(isDisabled){
      this.renderer.addClass(this.element.nativeElement,'disabled');
    }
    else{
      this.renderer.addClass(this.element.nativeElement,'not-disabled');
    }
  }

}
