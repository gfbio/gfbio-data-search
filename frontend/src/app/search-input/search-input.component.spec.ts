import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { SearchInputComponent } from './search-input.component';
import { NodeService } from '../services/remote/node.service';

describe('SearchInputComponent', () => {
  let component: SearchInputComponent;
  let fixture: ComponentFixture<SearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchInputComponent],
      schemas: [NO_ERRORS_SCHEMA],
      // SearchInput pulls NodeService (-> HttpClient) transitively via several
      // services; a stub keeps the smoke test off the network.
      providers: [{ provide: NodeService, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
