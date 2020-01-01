import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHelpsupportComponent } from './dashboard-helpsupport.component';

describe('DashboardHelpsupportComponent', () => {
  let component: DashboardHelpsupportComponent;
  let fixture: ComponentFixture<DashboardHelpsupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHelpsupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHelpsupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
