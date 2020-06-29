import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotePageFoundComponent } from './note-page-found.component';

describe('NotePageFoundComponent', () => {
  let component: NotePageFoundComponent;
  let fixture: ComponentFixture<NotePageFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotePageFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotePageFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
