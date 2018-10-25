import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage  } from '../login/login';
import { RegisterPage  } from '../register/register';
import { ComparePage  } from '../compare/compare';
import { DdepartmentPage  } from '../ddepartment/ddepartment';
import { SearchPage } from '../search/search';

import { HomePage } from '../home/home';
import { Home3Page } from '../home3/home3';
/**
/**
 * Generated class for the Home2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home2',
  templateUrl: 'home2.html',
})
export class Home2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  login(){
    this.navCtrl.push(LoginPage)
 }
 register(){
  this.navCtrl.push(RegisterPage)
}
 compare(){
  this.navCtrl.push(ComparePage)
}
ddepartment(){
  this.navCtrl.push(DdepartmentPage)
}
search(){
  this.navCtrl.push(SearchPage)
}
home3(){
  this.navCtrl.push(Home3Page)
}
home(){
  this.navCtrl.push(HomePage)
}
}
