import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Register4Component } from './register4.component';

describe('Register4Component', () => {
  let component: Register4Component;
  let fixture: ComponentFixture<Register4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Register4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Register4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
