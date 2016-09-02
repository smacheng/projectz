import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import {CartModel} from '../../models/cartModel';
import {CartModalPage} from '../cart-modal/cart-modal';

/*
  Generated class for the BottomCartPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'bottom-cart',
  templateUrl: 'build/pages/bottom-cart/bottom-cart.html',
  providers: [CartModel]

})

export class BottomCartPage {

  constructor(private navCtrl: NavController,private _cartModel: CartModel, public modalCtrl: ModalController) {
  
  }

  showCartModal(){
  	let modal = this.modalCtrl.create(CartModalPage);
  	modal.present();
  }



}
