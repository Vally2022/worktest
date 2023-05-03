import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostSecondComponent } from './blog-post-second.component';

describe('BlogPostSecondComponent', () => {
  let component: BlogPostSecondComponent;
  let fixture: ComponentFixture<BlogPostSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogPostSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
