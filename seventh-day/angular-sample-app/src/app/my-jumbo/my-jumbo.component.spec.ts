import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyJumboComponent } from './my-jumbo.component';

describe('MyJumboComponent', () => {
  let component: MyJumboComponent;
  let fixture: ComponentFixture<MyJumboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyJumboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyJumboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
