import { TestBed } from '@angular/core/testing';

import { JpNgFlashCardsService } from './jp-ng-flash-cards.service';

describe('JpNgFlashCardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JpNgFlashCardsService = TestBed.get(JpNgFlashCardsService);
    expect(service).toBeTruthy();
  });
});
