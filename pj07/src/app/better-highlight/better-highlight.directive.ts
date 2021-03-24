import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input()
  defaultColor: String = 'transparent';

  @Input('appBetterHighlight')
  highlightColor: String = 'red';

  @HostBinding('style.backgroundColor') backgroundColor: String;

  constructor(
    private elementRef: ElementRef,
    private readonly renderer: Renderer2
  ) { }

  ngOnInit() {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter')
  mouseOver(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')
  mouseLeave(eventData: Event) {
  //   this.renderer.setStyle(
  //     this.elementRef.nativeElement,
  //     'background-color',
  //     'transparent'
  //   );
    this.backgroundColor = this.defaultColor;
  }
}
