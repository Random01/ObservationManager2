import { TestBed } from '@angular/core/testing';
import { PageNotFoundComponent } from './page-not-found.component';

describe('PageNotFoundComponent', () => {
  it('shows a heading explaining that the requested page is missing', () => {
    const fixture = TestBed.createComponent(PageNotFoundComponent);
    fixture.detectChanges();

    const heading: HTMLHeadingElement = fixture.nativeElement.querySelector('h1');
    expect(heading.textContent).toBe('Page Not Found');
  });
});
