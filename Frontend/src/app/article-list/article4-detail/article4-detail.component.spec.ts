import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Article4DetailComponent } from './article4-detail.component';

describe('Article4DetailComponent', () => {
  let component: Article4DetailComponent;
  let fixture: ComponentFixture<Article4DetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Article4DetailComponent]
    });
    fixture = TestBed.createComponent(Article4DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
