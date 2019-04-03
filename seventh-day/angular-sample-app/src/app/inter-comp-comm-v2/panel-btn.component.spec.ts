import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelBtnComponent } from './panel-btn.component';

describe('PanelBtnComponent', () => {
  let component: PanelBtnComponent;
  let fixture: ComponentFixture<PanelBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
