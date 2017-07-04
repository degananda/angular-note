import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComNoteComponent } from './com-note.component';

describe('ComNoteComponent', () => {
  let component: ComNoteComponent;
  let fixture: ComponentFixture<ComNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
