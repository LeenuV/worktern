import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardManagejobsComponent } from './dashboard-managejobs.component';

describe('DashboardManagejobsComponent', () => {
  let component: DashboardManagejobsComponent;
  let fixture: ComponentFixture<DashboardManagejobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardManagejobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardManagejobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
