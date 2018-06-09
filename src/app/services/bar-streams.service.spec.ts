import { TestBed, inject } from '@angular/core/testing';

import { BarStreamsService } from './bar-streams.service';

describe('BarStreamsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BarStreamsService]
    });
  });

  it('should be created', inject([BarStreamsService], (service: BarStreamsService) => {
    expect(service).toBeTruthy();
  }));
});
