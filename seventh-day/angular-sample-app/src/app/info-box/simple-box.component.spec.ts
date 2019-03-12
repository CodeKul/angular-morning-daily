import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleBoxComponent } from './simple-box.component';

describe('SimpleBoxComponent', () => {
  let component: SimpleBoxComponent;
  let fixture: ComponentFixture<SimpleBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
