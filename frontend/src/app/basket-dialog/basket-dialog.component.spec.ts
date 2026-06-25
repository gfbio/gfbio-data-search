import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { KeycloakService } from 'keycloak-angular';

import { BasketDialogComponent } from './basket-dialog.component';
import { NodeService } from '../services/remote/node.service';

describe('BasketDialogComponent', () => {
  let component: BasketDialogComponent;
  let fixture: ComponentFixture<BasketDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasketDialogComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: MatDialogRef,
          useValue: { addPanelClass: () => {}, removePanelClass: () => {}, close: () => {} },
        },
        // The dialog template iterates the basket items, so data must be iterable.
        { provide: MAT_DIALOG_DATA, useValue: [] },
        { provide: NodeService, useValue: {} },
        { provide: KeycloakService, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BasketDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
