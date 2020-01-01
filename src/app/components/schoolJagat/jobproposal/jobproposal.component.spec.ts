import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobproposalComponent } from './jobproposal.component';

describe('JobproposalComponent', () => {
  let component: JobproposalComponent;
  let fixture: ComponentFixture<JobproposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobproposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobproposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
