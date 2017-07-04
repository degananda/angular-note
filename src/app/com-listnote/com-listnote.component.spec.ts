import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComListnoteComponent } from './com-listnote.component';

describe('ComListnoteComponent', () => {
  let component: ComListnoteComponent;
  let fixture: ComponentFixture<ComListnoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComListnoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComListnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
