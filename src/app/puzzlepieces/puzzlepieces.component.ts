import { Component, OnInit } from '@angular/core';
import { Puzzlepiece } from '../puzzlepiece.model';
import { Router } from '@angular/router';
import { PuzzlepieceService } from '../puzzlepiece.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-puzzlepieces',
  templateUrl: './puzzlepieces.component.html',
  styleUrls: ['./puzzlepieces.component.css'],
  providers: [PuzzlepieceService]
})

export class PuzzlepiecesComponent implements OnInit {
  puzzlepieces: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private puzzlepieceService: PuzzlepieceService){}

  ngOnInit(){
    this.puzzlepieces = this.puzzlepieceService.getPuzzlepieces();
  }

  goToDetailPage(clickedPuzzlepiece) {
    this.router.navigate(['puzzlepieces', clickedPuzzlepiece.$key]);
  };
}
