import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DcomparePage } from '../dcompare/dcompare';
import { InlistPage } from '../inlist/inlist';

/**
 * Generated class for the ComparePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compare',
  templateUrl: 'compare.html',
})
export class ComparePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  dcompare() {
    this.navCtrl.push(DcomparePage)    
  }

  inlist(){
    this.navCtrl.push(InlistPage)
  }
}
