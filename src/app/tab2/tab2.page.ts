import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Photo } from '../services/photo';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg]
})
export class Tab2Page {

  constructor( public photoservice: Photo) {}

  addPhotoToGallery() {
      this.photoservice.addNewToGallery();
  }
}
