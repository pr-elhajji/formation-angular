import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentFormTemplateComponent } from './comment-form-template.component';

describe('CommentFormTemplateComponent', () => {
  let component: CommentFormTemplateComponent;
  let fixture: ComponentFixture<CommentFormTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentFormTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentFormTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
