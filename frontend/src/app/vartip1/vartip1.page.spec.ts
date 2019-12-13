import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vartip1Page } from './vartip1.page';

describe('Vartip1Page', () => {
  let component: Vartip1Page;
  let fixture: ComponentFixture<Vartip1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vartip1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vartip1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
