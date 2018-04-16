import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//asegurarn que NavParams este importado
import { Album } from '../../interfaces/album.interface';

/**
 * Generated class for the ShowalbumsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-showalbums',
  templateUrl: 'showalbums.html',
})
export class ShowalbumsPage {

  Albums:Album[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // console.log(navParams);
    this.Albums = this.navParams.get('album');
    // console.log(this.Albums);
  }


}
