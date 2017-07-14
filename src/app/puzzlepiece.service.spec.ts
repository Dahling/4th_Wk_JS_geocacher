import { TestBed, inject } from '@angular/core/testing';

import { PuzzlepieceService } from './puzzlepiece.service';

describe('PuzzlepieceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PuzzlepieceService]
    });
  });

  it('should ...', inject([PuzzlepieceService], (service: PuzzlepieceService) => {
    expect(service).toBeTruthy();
  }));
});
