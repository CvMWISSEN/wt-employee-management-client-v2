import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericTypeaheadComponent } from './generic-typeahead.component';

describe('GenericTypeaheadComponent', () => {
  let component: GenericTypeaheadComponent;
  let fixture: ComponentFixture<GenericTypeaheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericTypeaheadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericTypeaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
