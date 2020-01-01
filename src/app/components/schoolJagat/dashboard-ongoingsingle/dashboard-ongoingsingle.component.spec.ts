import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOngoingsingleComponent } from './dashboard-ongoingsingle.component';

describe('DashboardOngoingsingleComponent', () => {
  let component: DashboardOngoingsingleComponent;
  let fixture: ComponentFixture<DashboardOngoingsingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardOngoingsingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOngoingsingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
