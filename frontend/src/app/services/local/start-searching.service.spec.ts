import { TestBed } from '@angular/core/testing';

import { StartSearchingService } from './start-searching.service';
import { NodeService } from '../remote/node.service';

describe('StartSearchingService', () => {
  let service: StartSearchingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: NodeService, useValue: {} }],
    });
    service = TestBed.inject(StartSearchingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
