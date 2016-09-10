import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ShopPage} from '../shop/shop';
// import {AdminPage} from '../admin/admin';
// import {LoginPage} from '../login/login';


/*
  Generated class for the ShopListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/shop-list/shop-list.html',
  selector: "shoplist",

})
export class ShopListPage {
  @Input() shops:any;

  constructor(private navCtrl: NavController) {

  }

  go(item){
    // console.log(ShopPage); 
    // console.log(item.$key)
    this.navCtrl.push(ShopPage, {key: item.$key})
    // console.log(item); 
  }


}
