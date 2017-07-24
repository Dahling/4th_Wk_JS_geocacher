import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { GeocacheService } from '../geocache.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { Geocache } from '../geocache.model';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [ GeocacheService ]
})
export class WelcomeComponent {
  geocaches: any[];
  constructor(
    private router: Router,
    private location: Location,
    private geocacheService: GeocacheService) { }

    ngOnInit(){
    this.geocacheService.getGeocaches().subscribe(data => {
    this.geocaches = data;
    });
    }
    goToDetailPage(clickedGeocache) {
    this.router.navigate(['geocaches', clickedGeocache.$key]);
    };
    }
