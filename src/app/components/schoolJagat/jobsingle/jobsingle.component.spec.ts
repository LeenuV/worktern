import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsingleComponent } from './jobsingle.component';

describe('JobsingleComponent', () => {
  let component: JobsingleComponent;
  let fixture: ComponentFixture<JobsingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
