import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandbuildingComponent } from './brandbuilding.component';

describe('BrandbuildingComponent', () => {
  let component: BrandbuildingComponent;
  let fixture: ComponentFixture<BrandbuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandbuildingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandbuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
