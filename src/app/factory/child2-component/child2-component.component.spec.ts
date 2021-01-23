import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child2ComponentComponent } from './child2-component.component';

describe('Child2ComponentComponent', () => {
  let component: Child2ComponentComponent;
  let fixture: ComponentFixture<Child2ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child2ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
