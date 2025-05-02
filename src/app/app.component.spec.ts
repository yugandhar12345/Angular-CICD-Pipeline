import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent], // ✅ Import, don't declare
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render title and description', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('CodeKamikaze');
    expect(compiled.querySelector('p')?.textContent).toContain('Like, Share, Subscribe');
  });

  it('should display the image', () => {
    const imageEl = fixture.debugElement.query(By.css('img'));
    expect(imageEl).toBeTruthy();
    expect(imageEl.nativeElement.src).toContain('codekamikaze.png');
  });
});
