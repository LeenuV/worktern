import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPackagesComponent } from './dashboard-packages.component';

describe('DashboardPackagesComponent', () => {
  let component: DashboardPackagesComponent;
  let fixture: ComponentFixture<DashboardPackagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPackagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
