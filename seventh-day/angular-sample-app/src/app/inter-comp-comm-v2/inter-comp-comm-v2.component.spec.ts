import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterCompCommV2Component } from './inter-comp-comm-v2.component';

describe('InterCompCommV2Component', () => {
  let component: InterCompCommV2Component;
  let fixture: ComponentFixture<InterCompCommV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterCompCommV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterCompCommV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
