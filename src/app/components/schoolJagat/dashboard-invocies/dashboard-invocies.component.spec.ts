import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInvociesComponent } from './dashboard-invocies.component';

describe('DashboardInvociesComponent', () => {
  let component: DashboardInvociesComponent;
  let fixture: ComponentFixture<DashboardInvociesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardInvociesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardInvociesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
