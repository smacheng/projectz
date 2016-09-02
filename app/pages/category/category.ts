import { Component,Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CategoryPipe} from '../../pipes/category-pipe';
import {CartModel} from '../../models/cartModel';


/*
  Generated class for the CategoryPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/category/category.html',
  selector: 'catpage',
  pipes: [CategoryPipe],
  providers: [CartModel]
})
export class CategoryPage {
   @Input() category:any;
   @Input() items:any;   
  constructor(private navCtrl: NavController, private _cartModel: CartModel){
      


  }
  


}
