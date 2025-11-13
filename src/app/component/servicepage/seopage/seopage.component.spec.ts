import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeopageComponent } from './seopage.component';

describe('SeopageComponent', () => {
  let component: SeopageComponent;
  let fixture: ComponentFixture<SeopageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeopageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
