import { Component } from '@angular/core';
import { NavController,ViewController } from 'ionic-angular';
import {CartModel} from '../../models/cartModel';

/*
  Generated class for the CartModalPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/cart-modal/cart-modal.html',
  providers: [CartModel]

})
export class CartModalPage {

  constructor(private navCtrl: NavController,public viewCtrl: ViewController,private _cartModel: CartModel) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
