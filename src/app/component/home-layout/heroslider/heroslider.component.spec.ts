import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosliderComponent } from './heroslider.component';

describe('HerosliderComponent', () => {
  let component: HerosliderComponent;
  let fixture: ComponentFixture<HerosliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HerosliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerosliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
