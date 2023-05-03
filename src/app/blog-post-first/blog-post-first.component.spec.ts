import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostFirstComponent } from './blog-post-first.component';

describe('BlogPostFirstComponent', () => {
  let component: BlogPostFirstComponent;
  let fixture: ComponentFixture<BlogPostFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostFirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogPostFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
