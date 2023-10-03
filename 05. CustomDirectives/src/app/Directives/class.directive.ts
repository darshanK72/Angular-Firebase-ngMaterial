import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective implements OnInit{

  // @Input() display!:Object;

  constructor(private element:ElementRef,private renderer:Renderer2) { }

  @Input('appClass') set display(value:Object){
    console.log(value);

    let entries = Object.entries(value);

    for(let prop of entries){
      let[className,condition] = prop;
      if(condition){
        this.renderer.addClass(this.element.nativeElement,className);
      }
    }
  }

  ngOnInit(): void {
    // let entries = Object.entries(this.display);

    // for(let prop of entries){
    //   let[className,condition] = prop;
    //   if(condition){
    //     this.renderer.addClass(this.element.nativeElement,className);
    //   }
    // }
  }

}
