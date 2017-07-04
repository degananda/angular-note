import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComAddnoteComponent } from './com-addnote.component';

describe('ComAddnoteComponent', () => {
  let component: ComAddnoteComponent;
  let fixture: ComponentFixture<ComAddnoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComAddnoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComAddnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
