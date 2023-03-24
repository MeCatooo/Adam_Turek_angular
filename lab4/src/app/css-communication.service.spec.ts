import { TestBed } from '@angular/core/testing';

import { CssCommunicationService } from './css-communication.service';

describe('CssCommunicationService', () => {
  let service: CssCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CssCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
