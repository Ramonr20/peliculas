import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowalbumsPage } from './showalbums';

@NgModule({
  declarations: [
    ShowalbumsPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowalbumsPage),
  ],
})
export class ShowalbumsPageModule {}
