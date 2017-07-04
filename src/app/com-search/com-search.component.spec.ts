import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComSearchComponent } from './com-search.component';

describe('ComSearchComponent', () => {
  let component: ComSearchComponent;
  let fixture: ComponentFixture<ComSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
