import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1ComponentComponent } from './child1-component.component';

describe('Child1ComponentComponent', () => {
  let component: Child1ComponentComponent;
  let fixture: ComponentFixture<Child1ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child1ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child1ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
