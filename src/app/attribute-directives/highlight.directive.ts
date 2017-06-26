import {Directive, ElementRef, HostListener, Input} from "@angular/core";

@Directive({
  selector: '[myHighlight]'
})
export class HighlightDirective {

  @Input('myHighlight') highlightColor: string;
  @Input() defaultColor: string;

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
