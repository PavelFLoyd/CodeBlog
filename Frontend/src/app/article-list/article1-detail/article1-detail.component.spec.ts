import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Article1DetailComponent } from './article1-detail.component';

describe('Article1DetailComponent', () => {
  let component: Article1DetailComponent;
  let fixture: ComponentFixture<Article1DetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Article1DetailComponent]
    });
    fixture = TestBed.createComponent(Article1DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
