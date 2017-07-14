import { Component, OnInit } from '@angular/core';
import { Puzzlepiece } from '../puzzlepiece.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-puzzlepieces',
  templateUrl: './puzzlepieces.component.html',
  styleUrls: ['./puzzlepieces.component.css']
})
export class PuzzlepiecesComponent implements OnInit {

  constructor(private router: Router){}



  ngOnInit() {
  }

  goToDetailPage(clickedPuzzlepiece) {
     this.router.navigate(['puzzlepieces', clickedPuzzlepiece.$key]);
   };

}
