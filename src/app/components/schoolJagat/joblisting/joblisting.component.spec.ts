import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoblistingComponent } from './joblisting.component';

describe('JoblistingComponent', () => {
  let component: JoblistingComponent;
  let fixture: ComponentFixture<JoblistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoblistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoblistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
