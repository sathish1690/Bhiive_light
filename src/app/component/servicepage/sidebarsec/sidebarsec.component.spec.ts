import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarsecComponent } from './sidebarsec.component';

describe('SidebarsecComponent', () => {
  let component: SidebarsecComponent;
  let fixture: ComponentFixture<SidebarsecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarsecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarsecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
