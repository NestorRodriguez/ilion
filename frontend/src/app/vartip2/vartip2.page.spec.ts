import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vartip2Page } from './vartip2.page';

describe('Vartip2Page', () => {
  let component: Vartip2Page;
  let fixture: ComponentFixture<Vartip2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vartip2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vartip2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
