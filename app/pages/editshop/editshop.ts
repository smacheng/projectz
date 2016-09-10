import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {Shop} from '../../models/models';
import { KeysPipe } from "../../pipes/keys-pipe";
import {MainService} from '../../services/mainService';


/*
  Generated class for the EditshopPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/editshop/editshop.html',
  pipes: [KeysPipe],
  providers: [MainService],


})
export class EditshopPage {

  shop:Shop;
  shops:Array<any>;   

  constructor(private navCtrl: NavController, private params: NavParams, private service: MainService) {
  		this.shop = this.params.get('shop')
      this.shops = this.params.get('shops')
      console.log(this.shops); 
  }


  editItem(_data){
      
      var copy_data = Object.assign({}, _data);
      delete copy_data.$key
      this.service.getList('Shops').update(_data.$key,copy_data);
  }

}
