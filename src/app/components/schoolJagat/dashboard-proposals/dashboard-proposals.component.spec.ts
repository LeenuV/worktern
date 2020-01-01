import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProposalsComponent } from './dashboard-proposals.component';

describe('DashboardProposalsComponent', () => {
  let component: DashboardProposalsComponent;
  let fixture: ComponentFixture<DashboardProposalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardProposalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardProposalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
