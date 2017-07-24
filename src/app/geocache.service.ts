import { Injectable } from '@angular/core';
import { Geocache } from './geocache.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GeocacheService {
  geocaches: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.geocaches = database.list('geocaches');
  }

  getGeocaches() {
    return this.geocaches;
  }

  addGeocache(newGeocache: Geocache) {
    this.geocaches.push(newGeocache);
  }

  getGeocacheById(geocacheId: string) {
    return this.database.object('geocaches/' + geocacheId);
  }

  updateGeocache(localUpdatedGeocache){
    const geocacheEntryInFirebase = this.getGeocacheById(localUpdatedGeocache.$key);
    geocacheEntryInFirebase.update({
                                name: localUpdatedGeocache.name,
                                age: localUpdatedGeocache.age,
                                description: localUpdatedGeocache.description,
                                likes: localUpdatedGeocache.likes,
                                dislikes: localUpdatedGeocache.dislikes,
                                url: localUpdatedGeocache.url
                              });
  }

  deleteGeocache(localGeocacheToDelete) {
    const geocacheEntryInFirebase = this.getGeocacheById(localGeocacheToDelete.$key);
    geocacheEntryInFirebase.remove();
  }
}
