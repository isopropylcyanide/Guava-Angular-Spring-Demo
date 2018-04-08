import { TestBed, inject } from '@angular/core/testing';

import { ViewRestoreService } from './view-restore.service';

describe('ViewRestoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewRestoreService]
    });
  });

  it('should be created', inject([ViewRestoreService], (service: ViewRestoreService) => {
    expect(service).toBeTruthy();
  }));
});
