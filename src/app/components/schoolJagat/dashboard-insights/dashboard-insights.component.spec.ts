import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInsightsComponent } from './dashboard-insights.component';

describe('DashboardInsightsComponent', () => {
  let component: DashboardInsightsComponent;
  let fixture: ComponentFixture<DashboardInsightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardInsightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
