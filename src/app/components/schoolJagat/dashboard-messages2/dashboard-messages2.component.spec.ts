import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMessages2Component } from './dashboard-messages2.component';

describe('DashboardMessages2Component', () => {
  let component: DashboardMessages2Component;
  let fixture: ComponentFixture<DashboardMessages2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardMessages2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMessages2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
