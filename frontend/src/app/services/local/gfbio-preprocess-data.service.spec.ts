import { TestBed } from '@angular/core/testing';

import { GfbioPreprocessDataService } from './gfbio-preprocess-data.service';

describe('GfbioPreprocessDataService', () => {
  let service: GfbioPreprocessDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GfbioPreprocessDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getValidation', () => {
    it('maps a hit\'s validation sibling into a Validation model', () => {
      const item = {
        _id: 'd1',
        _source: { abcdDatasetIdentifier: 'urn:gfbio.org:abcd:1_5_1' },
        validation: { validation_status: 'completed', quality_score: 87.1 },
      };
      const validation = service.getValidation(item);
      expect(validation).not.toBeNull();
      expect(validation.qualityScore).toBe(87.1);
      expect(validation.status).toBe('completed');
    });

    it('returns null for a hit with no validation (non-aggregator source)', () => {
      const item = { _id: 'd2', _source: { citation_title: 'PANGAEA dataset' } };
      expect(service.getValidation(item)).toBeNull();
    });
  });
});
