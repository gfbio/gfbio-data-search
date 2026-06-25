import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { GfbioComponent } from './gfbio.component';
import { StartSearchingService } from '../services/local/start-searching.service';

describe('GfbioComponent', () => {
  let component: GfbioComponent;
  let fixture: ComponentFixture<GfbioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GfbioComponent],
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      // ActivatedRoute/Location come from RouterTestingModule; StartSearching
      // (-> NodeService -> HttpClient) is stubbed so ngOnInit does no network.
      providers: [
        { provide: StartSearchingService, useValue: { startSearching: () => {} } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GfbioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
