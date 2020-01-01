import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexvtwoComponent } from './indexvtwo.component';

describe('IndexvtwoComponent', () => {
  let component: IndexvtwoComponent;
  let fixture: ComponentFixture<IndexvtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexvtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexvtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
