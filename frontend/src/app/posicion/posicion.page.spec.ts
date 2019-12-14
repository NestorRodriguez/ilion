import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosicionPage } from './posicion.page';

describe('PosicionPage', () => {
  let component: PosicionPage;
  let fixture: ComponentFixture<PosicionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosicionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosicionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
