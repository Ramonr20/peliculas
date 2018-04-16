import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ALBUMS } from '../../data/data.albums';
import { Album } from '../../interfaces/album.interface';
import { ShowalbumsPage } from '../showalbums/showalbums';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Albums:Album[] = [];

  constructor(public navCtrl: NavController) {
    this.Albums = ALBUMS.slice(0);
  }
  showAlbum(albums:Album) {
    // console.log(album);
    this.navCtrl.push(ShowalbumsPage, {'album':albums});
  }

}
