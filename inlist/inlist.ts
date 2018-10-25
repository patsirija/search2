import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComparePage } from '../compare/compare';

/**
 * Generated class for the InlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inlist',
  templateUrl: 'inlist.html',
})
export class InlistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  compare(){
    this.navCtrl.push(ComparePage)
  }
  inlist(){
    this.navCtrl.push(InlistPage)
  }

}
