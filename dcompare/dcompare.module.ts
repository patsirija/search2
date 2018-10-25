import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DcomparePage } from './dcompare';

@NgModule({
  declarations: [
    DcomparePage,
  ],
  imports: [
    IonicPageModule.forChild(DcomparePage),
  ],
})
export class DcomparePageModule {}
