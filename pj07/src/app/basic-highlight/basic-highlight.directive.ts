import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  constructor(private readonly elementRef: ElementRef) {}

  ngOnInit() {
    (this.elementRef.nativeElement as HTMLElement).style.backgroundColor = 'green';
  }
}
