import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjanalisisPage } from './msjanalisis.page';

describe('MsjanalisisPage', () => {
  let component: MsjanalisisPage;
  let fixture: ComponentFixture<MsjanalisisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsjanalisisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsjanalisisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
