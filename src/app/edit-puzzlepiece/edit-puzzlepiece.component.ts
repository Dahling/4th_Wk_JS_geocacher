import { Component, Input, OnInit } from '@angular/core';
import { PuzzlepieceService } from '../puzzlepiece.service';

@Component({
  selector: 'app-edit-puzzlepiece',
  templateUrl: './edit-puzzlepiece.component.html',
  styleUrls: ['./edit-puzzlepiece.component.css'],
  providers: [PuzzlepieceService]
})


export class EditPuzzlepieceComponent implements OnInit {
  @Input() selectedPuzzlepiece;

  constructor(private puzzlepieceService: PuzzlepieceService) { }

  ngOnInit() {
  }

  beginUpdatingPuzzlepiece(puzzlepieceToUpdate) {
    this.puzzlepieceService.updatePuzzlepiece(puzzlepieceToUpdate);
  }

  beginDeletingPuzzlepiece(puzzlepieceToDelete){
    if(confirm("Are you sure you want to delete this puzzlepiece?")){
      this.puzzlepieceService.deletePuzzlepiece(puzzlepieceToDelete);
    }
  }

}
