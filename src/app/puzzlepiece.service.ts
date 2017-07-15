import { Injectable } from '@angular/core';
import { Puzzlepiece } from './puzzlepiece.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PuzzlepieceService {
  puzzlepieces: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.puzzlepieces = database.list('puzzlepieces');
  }

  getPuzzlepieces() {
    return this.puzzlepieces;
  }

  addPuzzlepiece(newPuzzlepiece: Puzzlepiece) {
    this.puzzlepieces.push(newPuzzlepiece);
  }

  getPuzzlepieceById(puzzlepieceId: string){
    return this.database.object('puzzlepieces/' + puzzlepieceId);
  }

  updatePuzzlepiece(localUpdatedPuzzlepiece){
    var puzzlepieceEntryInFirebase = this.getPuzzlepieceById(localUpdatedPuzzlepiece.$key);
    puzzlepieceEntryInFirebase.update({name: localUpdatedPuzzlepiece.name,
                                manager: localUpdatedPuzzlepiece.age,
                                type: localUpdatedPuzzlepiece.description,
                                description: localUpdatedPuzzlepiece.likes,
                                amount: localUpdatedPuzzlepiece.dislikes});
  }

  deletePuzzlepiece(localPuzzlepieceToDelete){
    var puzzlepieceEntryInFirebase = this.getPuzzlepieceById(localPuzzlepieceToDelete.$key);
    puzzlepieceEntryInFirebase.remove();
  }
}
