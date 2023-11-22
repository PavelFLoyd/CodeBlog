import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Article2DetailComponent } from './article2-detail.component';

describe('Article2DetailComponent', () => {
  let component: Article2DetailComponent;
  let fixture: ComponentFixture<Article2DetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Article2DetailComponent]
    });
    fixture = TestBed.createComponent(Article2DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
