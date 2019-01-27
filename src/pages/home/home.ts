import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { Pic } from '../../interfaces/pic';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  picArray: Pic[];
  configUrl = 'https://media.mw.metropolia.fi/wbma';

  constructor(
    public navCtrl: NavController,
    public photoViewer: PhotoViewer,
    public http: HttpClient) {

  }

  getData() {
    return this.http.get<Pic[]>(this.configUrl + '/media');
  }

  showImage(image) {
    this.photoViewer.show(image);
  }

  ngOnInit() {
    this.getData().subscribe((data: Pic[]) => {
      this.picArray = data;
    });
  }
}
