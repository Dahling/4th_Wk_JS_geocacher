import { Component, Input, OnInit } from '@angular/core';
import { GeocacheService } from '../geocache.service';

@Component({
  selector: 'app-edit-geocache',
  templateUrl: './edit-geocache.component.html',
  styleUrls: ['./edit-geocache.component.css'],
  providers: [GeocacheService]
})


export class EditGeocacheComponent implements OnInit {
  @Input() selectedGeocache;

  constructor(private geocacheService: GeocacheService) { }

  ngOnInit() {
  }

  beginUpdatingGeocache(geocacheToUpdate) {
    this.geocacheService.updateGeocache(geocacheToUpdate);
  }

  beginDeletingGeocache(geocacheToDelete) {
    if(confirm('Are you sure you want to delete this geocache?')) {
      this.geocacheService.deleteGeocache(geocacheToDelete);
    }
  }

}
