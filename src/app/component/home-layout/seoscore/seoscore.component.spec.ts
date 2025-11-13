import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoscoreComponent } from './seoscore.component';

describe('SeoscoreComponent', () => {
  let component: SeoscoreComponent;
  let fixture: ComponentFixture<SeoscoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeoscoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeoscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
