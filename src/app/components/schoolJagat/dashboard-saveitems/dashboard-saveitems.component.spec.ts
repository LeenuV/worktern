import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSaveitemsComponent } from './dashboard-saveitems.component';

describe('DashboardSaveitemsComponent', () => {
  let component: DashboardSaveitemsComponent;
  let fixture: ComponentFixture<DashboardSaveitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSaveitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSaveitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
