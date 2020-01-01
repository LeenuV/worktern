import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanysigleComponent } from './companysigle.component';

describe('CompanysigleComponent', () => {
  let component: CompanysigleComponent;
  let fixture: ComponentFixture<CompanysigleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanysigleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanysigleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
