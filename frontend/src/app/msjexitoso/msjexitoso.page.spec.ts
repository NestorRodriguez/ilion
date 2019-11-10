import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjexitosoPage } from './msjexitoso.page';

describe('MsjexitosoPage', () => {
  let component: MsjexitosoPage;
  let fixture: ComponentFixture<MsjexitosoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsjexitosoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsjexitosoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
