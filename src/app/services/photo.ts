import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'
import { Filesystem, Directory } from '@capacitor/filesystem'
import { Preferences } from '@capacitor/preferences'

@Injectable({
  providedIn: 'root'
})
export class Photo {
  public photos: UserPhoto[]=[];

  public async addNewToGallery(){
    const capturedPhoto = await Camera.getPhoto({
      resultType:CameraResultType.Uri,
      source : CameraSource.Camera,
      quality: 100,
    })

    this.photos.unshift({
      filepath : "soon ...",
      webviewPath : capturedPhoto.webPath!
    });
  }
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
