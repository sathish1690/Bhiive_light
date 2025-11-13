import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkersategyComponent } from './markersategy.component';

describe('MarkersategyComponent', () => {
  let component: MarkersategyComponent;
  let fixture: ComponentFixture<MarkersategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkersategyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkersategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
