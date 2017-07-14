import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Puzzlepiece } from '../puzzlepiece.model';

@Component({
  selector: 'app-puzzlepiece-detail',
  templateUrl: './puzzlepiece-detail.component.html',
  styleUrls: ['./puzzlepiece-detail.component.css']
})
export class PuzzlepieceDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
  this.route.params.forEach((urlParameters) => {
   this.puzzlepiecetId = urlParameters['id'];
 });
 this.puzzlepiecetToDisplay = this.puzzlepiecetService.getPuzzlepieceById(this.puzzlepiecetId);
}
}
