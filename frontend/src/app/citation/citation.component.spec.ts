import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CitationComponent } from './citation.component';
import { Hit } from '../models/result/hit';
import { Citation } from '../models/result/citation';

describe('CitationComponent', () => {
  let component: CitationComponent;
  let fixture: ComponentFixture<CitationComponent>;

  beforeEach(async () => {
    // The component reads data.getCitation() in its constructor and the template
    // iterates citation.getCreator(); provide a minimal Hit with a Citation.
    const citation = new Citation();
    citation.setTitle('A dataset');
    citation.setCreator([]);
    citation.setDate('2026');
    citation.setSource('GFBio');
    citation.setDOI('10.0000/example');
    citation.setDataCenter('GFBIO');
    const data = new Hit();
    data.setCitation(citation);

    await TestBed.configureTestingModule({
      declarations: [CitationComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: data },
        {
          provide: MatDialogRef,
          useValue: { addPanelClass: () => {}, removePanelClass: () => {}, close: () => {} },
        },
        { provide: MatSnackBar, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
