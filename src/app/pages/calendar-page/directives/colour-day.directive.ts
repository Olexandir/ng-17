import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[colourDay]',
  standalone: true,
})
export class ColourDayDirective {
  @Input('colourDay') public colourDay!: Date;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.showToday();
  }

  showToday(): void {
    const today = new Date();

    if (this.colourDay.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0)) {
      this.renderer.setStyle(
        this.element.nativeElement,
        'background',
        'rgba(255, 200, 0, 0.6)'
      );
      this.renderer.setStyle(this.element.nativeElement, 'font-weight', 'bold');
    }
  }
}
