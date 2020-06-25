import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadrangularComponent } from './cuadrangular.component';

describe('CuadrangularComponent', () => {
  let component: CuadrangularComponent;
  let fixture: ComponentFixture<CuadrangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuadrangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadrangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
