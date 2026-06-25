import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ContextBoxComponent } from './context-box.component';
import { NodeService } from '../services/remote/node.service';

describe('ContextBoxComponent', () => {
  let component: ContextBoxComponent;
  let fixture: ComponentFixture<ContextBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContextBoxComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: NodeService, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(ContextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
