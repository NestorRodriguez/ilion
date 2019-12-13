import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeninscripPage } from './resumeninscrip.page';

describe('ResumeninscripPage', () => {
  let component: ResumeninscripPage;
  let fixture: ComponentFixture<ResumeninscripPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeninscripPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeninscripPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
