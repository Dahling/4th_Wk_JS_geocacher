import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzlepieceDetailComponent } from './puzzlepiece-detail.component';

describe('PuzzlepieceDetailComponent', () => {
  let component: PuzzlepieceDetailComponent;
  let fixture: ComponentFixture<PuzzlepieceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuzzlepieceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzlepieceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
