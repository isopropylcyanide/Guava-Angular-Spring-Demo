import { TestBed, inject } from '@angular/core/testing';

import { GuavaUseCaseService } from './guava-use-case.service';

describe('GuavaUseCaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuavaUseCaseService]
    });
  });

  it('should be created', inject([GuavaUseCaseService], (service: GuavaUseCaseService) => {
    expect(service).toBeTruthy();
  }));
});
