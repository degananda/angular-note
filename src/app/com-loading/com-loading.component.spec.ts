import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComLoadingComponent } from './com-loading.component';

describe('ComLoadingComponent', () => {
  let component: ComLoadingComponent;
  let fixture: ComponentFixture<ComLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
