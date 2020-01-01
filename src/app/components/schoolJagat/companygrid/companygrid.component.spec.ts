import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanygridComponent } from './companygrid.component';

describe('CompanygridComponent', () => {
  let component: CompanygridComponent;
  let fixture: ComponentFixture<CompanygridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanygridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanygridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
