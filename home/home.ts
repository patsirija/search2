import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage  } from '../login/login';
import { RegisterPage  } from '../register/register';
import { ComparePage  } from '../compare/compare';
import { DdepartmentPage  } from '../ddepartment/ddepartment';
import { SearchPage } from '../search/search';
import { Home2Page } from '../home2/home2';
import { Home3Page } from '../home3/home3';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

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
home2(){
  this.navCtrl.push(Home2Page)
}
home3(){
  this.navCtrl.push(Home3Page)
}
}
