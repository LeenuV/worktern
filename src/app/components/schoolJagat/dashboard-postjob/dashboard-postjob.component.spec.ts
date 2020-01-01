import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPostjobComponent } from './dashboard-postjob.component';

describe('DashboardPostjobComponent', () => {
  let component: DashboardPostjobComponent;
  let fixture: ComponentFixture<DashboardPostjobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPostjobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPostjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
