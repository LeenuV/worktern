import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInsightsuserComponent } from './dashboard-insightsuser.component';

describe('DashboardInsightsuserComponent', () => {
  let component: DashboardInsightsuserComponent;
  let fixture: ComponentFixture<DashboardInsightsuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardInsightsuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardInsightsuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
