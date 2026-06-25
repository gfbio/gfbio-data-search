import { TestBed } from '@angular/core/testing';

import { InputAnalysisService } from './input-analysis.service';
import { NodeService } from '../remote/node.service';

describe('InputAnalysisService', () => {
  let service: InputAnalysisService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: NodeService, useValue: {} }],
    });
    service = TestBed.inject(InputAnalysisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
