import { Directive, ElementRef, HostBinding, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostbinding]'
})
export class HostbindingDirective implements OnInit{

  constructor(private element:ElementRef,private renderer:Renderer2) { }

  ngOnInit(): void {
    
  }

  @HostBinding('style.backgroundColor') bagkgroundColor = "blue";
  @HostBinding('style.color') color = 'white';
  @HostBinding('value') value = 'Hi There'
}
