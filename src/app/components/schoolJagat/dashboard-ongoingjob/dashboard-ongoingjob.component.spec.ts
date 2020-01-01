import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOngoingjobComponent } from './dashboard-ongoingjob.component';

describe('DashboardOngoingjobComponent', () => {
  let component: DashboardOngoingjobComponent;
  let fixture: ComponentFixture<DashboardOngoingjobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardOngoingjobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOngoingjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
