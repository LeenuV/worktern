import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAccountsettingsComponent } from './dashboard-accountsettings.component';

describe('DashboardAccountsettingsComponent', () => {
  let component: DashboardAccountsettingsComponent;
  let fixture: ComponentFixture<DashboardAccountsettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAccountsettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAccountsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
