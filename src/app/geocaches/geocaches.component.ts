import { Component, OnInit } from '@angular/core';
import { Geocache } from '../geocache.model';
import { Router } from '@angular/router';
import { GeocacheService } from '../geocache.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-geocaches',
  templateUrl: './geocaches.component.html',
  styleUrls: ['./geocaches.component.css'],
  providers: [GeocacheService]
})

export class GeocachesComponent implements OnInit {
  geocaches: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private geocacheService: GeocacheService) { }

  ngOnInit() {
    this.geocaches = this.geocacheService.getGeocaches();
  }

  goToDetailPage(clickedGeocache) {
    this.router.navigate(['geocachess', clickedGeocache.$key]);
  };
}
