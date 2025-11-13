import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowautomationComponent } from './workflowautomation.component';

describe('WorkflowautomationComponent', () => {
  let component: WorkflowautomationComponent;
  let fixture: ComponentFixture<WorkflowautomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkflowautomationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkflowautomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
