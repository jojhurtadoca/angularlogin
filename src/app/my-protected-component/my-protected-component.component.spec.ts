import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProtectedComponentComponent } from './my-protected-component.component';

describe('MyProtectedComponentComponent', () => {
  let component: MyProtectedComponentComponent;
  let fixture: ComponentFixture<MyProtectedComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProtectedComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProtectedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
