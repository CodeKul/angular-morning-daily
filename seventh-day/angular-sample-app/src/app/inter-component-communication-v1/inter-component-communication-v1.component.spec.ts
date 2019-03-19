import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterComponentCommunicationV1Component } from './inter-component-communication-v1.component';

describe('InterComponentCommunicationV1Component', () => {
  let component: InterComponentCommunicationV1Component;
  let fixture: ComponentFixture<InterComponentCommunicationV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterComponentCommunicationV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterComponentCommunicationV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
