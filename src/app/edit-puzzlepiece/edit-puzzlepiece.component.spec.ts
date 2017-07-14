import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPuzzlepieceComponent } from './edit-puzzlepiece.component';

describe('EditPuzzlepieceComponent', () => {
  let component: EditPuzzlepieceComponent;
  let fixture: ComponentFixture<EditPuzzlepieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPuzzlepieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPuzzlepieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
