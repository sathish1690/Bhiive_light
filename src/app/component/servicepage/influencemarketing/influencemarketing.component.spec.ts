import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluencemarketingComponent } from './influencemarketing.component';

describe('InfluencemarketingComponent', () => {
  let component: InfluencemarketingComponent;
  let fixture: ComponentFixture<InfluencemarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfluencemarketingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfluencemarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
