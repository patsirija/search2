import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage  } from '../login/login';
import { RegisterPage  } from '../register/register';
import { ComparePage  } from '../compare/compare';
import { DdepartmentPage  } from '../ddepartment/ddepartment';
import { SearchPage } from '../search/search';

import { HomePage } from '../home/home';
import { Home2Page } from '../home2/home2';
/**
 * Generated class for the Home3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home3',
  templateUrl: 'home3.html',
})
export class Home3Page {

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

home(){
  this.navCtrl.push(HomePage)
}
home2(){
  this.navCtrl.push(Home2Page)
}
}
