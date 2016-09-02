import { Component } from '@angular/core';
import { NavController,MenuController, App } from 'ionic-angular';
import { HomePage } from '../home/home';

import { AdminPage } from '../admin/admin';


/*
  Generated class for the MainPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/main/main.html',
})
export class MainPage {
  private rootPage: any;
  
  constructor(private navCtrl: NavController, private app: App, private menu: MenuController) {
  	    this.rootPage = AdminPage;
  
  }


}
