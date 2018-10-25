import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InlistPage } from './inlist';

@NgModule({
  declarations: [
    InlistPage,
  ],
  imports: [
    IonicPageModule.forChild(InlistPage),
  ],
})
export class InlistPageModule {}
