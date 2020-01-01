import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCompletejobsComponent } from './dashboard-completejobs.component';

describe('DashboardCompletejobsComponent', () => {
  let component: DashboardCompletejobsComponent;
  let fixture: ComponentFixture<DashboardCompletejobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCompletejobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCompletejobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
