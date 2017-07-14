import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzlepiecesComponent } from './puzzlepieces.component';

describe('PuzzlepiecesComponent', () => {
  let component: PuzzlepiecesComponent;
  let fixture: ComponentFixture<PuzzlepiecesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuzzlepiecesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzlepiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
