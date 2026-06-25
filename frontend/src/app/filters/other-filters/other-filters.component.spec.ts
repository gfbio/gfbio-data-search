import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { OtherFiltersComponent } from './other-filters.component';

describe('OtherFiltersComponent', () => {
  let component: OtherFiltersComponent;
  let fixture: ComponentFixture<OtherFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OtherFiltersComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(OtherFiltersComponent);
    component = fixture.componentInstance;
    // The template does *ngFor="let item of filter", so filter must be iterable.
    component.filter = [];
    component.filterValues = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
