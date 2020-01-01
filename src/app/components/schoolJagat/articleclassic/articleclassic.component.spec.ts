import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleclassicComponent } from './articleclassic.component';

describe('ArticleclassicComponent', () => {
  let component: ArticleclassicComponent;
  let fixture: ComponentFixture<ArticleclassicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleclassicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleclassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
