import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuInscipcionPage } from './menu-inscipcion.page';

describe('MenuInscipcionPage', () => {
  let component: MenuInscipcionPage;
  let fixture: ComponentFixture<MenuInscipcionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuInscipcionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuInscipcionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
