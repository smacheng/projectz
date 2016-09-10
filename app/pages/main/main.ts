import { Component } from '@angular/core';
import { NavController,MenuController, App } from 'ionic-angular';


import { HomePage } from '../home/home';
import { AdminPage } from '../admin/admin';
import { LoginPage } from '../login/login';


/*
  Generated class for the MainPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

interface PageObj {
  title: string;
  component: any;
}

@Component({
  templateUrl: 'build/pages/main/main.html',
})
export class MainPage {
  private rootPage: any;

  appPages: PageObj[] = [
    { title: 'Home', component: HomePage},
    { title: 'Admin', component: AdminPage},
    { title: 'Login', component: LoginPage},
  ];
  
  constructor(private navCtrl: NavController, private app: App, private menuCtrl: MenuController) {
  	    this.rootPage = HomePage;
  
  }

  openPage(page){


  	this.navCtrl.push(page.component);
    // this.rootPage = page.component;  
  }


}
