import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCanceljobsComponent } from './dashboard-canceljobs.component';

describe('DashboardCanceljobsComponent', () => {
  let component: DashboardCanceljobsComponent;
  let fixture: ComponentFixture<DashboardCanceljobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCanceljobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCanceljobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
