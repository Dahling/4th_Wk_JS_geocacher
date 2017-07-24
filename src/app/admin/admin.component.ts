import { Component } from '@angular/core';
import { GeocacheService } from '../geocache.service';
import { Geocache } from '../geocache.model';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [GeocacheService]
})

export class AdminComponent {

  constructor(private geocacheService: GeocacheService) { }



  submitForm(name: string, age: number, description: string) {
    const newGeocache: Geocache = new Geocache(name, age, description);
    this.geocacheService.addGeocache(newGeocache);
  }

}
