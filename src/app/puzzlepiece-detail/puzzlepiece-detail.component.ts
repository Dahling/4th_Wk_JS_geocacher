import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Puzzlepiece } from '../puzzlepiece.model';
import { PuzzlepieceService } from '../puzzlepiece.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-puzzlepiece-detail',
  templateUrl: './puzzlepiece-detail.component.html',
  styleUrls: ['./puzzlepiece-detail.component.css'],
  providers: [PuzzlepieceService]
})

export class PuzzlepieceDetailComponent implements OnInit {
  puzzlepieceId: string;
  puzzlepieceToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private puzzlepieceService: PuzzlepieceService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.puzzlepieceId = urlParameters['id'];
   });
   this.puzzlepieceToDisplay = this.puzzlepieceService.getPuzzlepieceById(this.puzzlepieceId);
  }
}
