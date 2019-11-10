import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MjsinsexitPage } from './mjsinsexit.page';

describe('MjsinsexitPage', () => {
  let component: MjsinsexitPage;
  let fixture: ComponentFixture<MjsinsexitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MjsinsexitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MjsinsexitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
