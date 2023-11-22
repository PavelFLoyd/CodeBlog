import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Article3DetailComponent } from './article3-detail.component';

describe('Article3DetailComponent', () => {
  let component: Article3DetailComponent;
  let fixture: ComponentFixture<Article3DetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Article3DetailComponent]
    });
    fixture = TestBed.createComponent(Article3DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
