import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleadsComponent } from './googleads.component';

describe('GoogleadsComponent', () => {
  let component: GoogleadsComponent;
  let fixture: ComponentFixture<GoogleadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleadsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
