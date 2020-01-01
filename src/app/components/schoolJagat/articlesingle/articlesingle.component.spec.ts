import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesingleComponent } from './articlesingle.component';

describe('ArticlesingleComponent', () => {
  let component: ArticlesingleComponent;
  let fixture: ComponentFixture<ArticlesingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
