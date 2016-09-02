import { Component,Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { KeysPipe } from "../../pipes/keys-pipe";
// import { FirebaseObjectObservable } from 'angularfire2';
import {MainService} from '../../services/mainService';
import * as _ from 'lodash';
import {Category,Shop,ItemCat,Item} from '../../models/models';
import {ShopPage} from '../shop/shop';



/*
  Generated class for the SubPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/sub/sub.html',
  selector: "subpage",
  pipes: [KeysPipe],
  providers: [MainService],


})
export class SubPage {
  @Input() item:any;
  list: any; 
  active:any = true;
  shops:any; 
  categories: any;


  constructor(private navCtrl: NavController,private service: MainService) {
  }

  removeItem(key) {
  	this.service.removeObject(this.item.db,key); 
  }


  addTheItem(_data,form) {

  	
    this.service.pushObject(this.item.db,_data).then(val =>{ 

      switch (form.constructor.name) {

        case "Shop":
          this.item.form =  new Shop(); 
          break;

       case "Category":
          this.item.form =  new Category();
         break;   
         
        default:  
          this.item.category_key = null; 
          this.item.shop_key = null; 
          this.item.form =  new Item();
          break;     

      }
  

      this.active = false;
  		setTimeout(() => this.active = true, 0);
  	
    }).catch(error =>{ 
  		console.log(error)
  	})

  }
	  

  goTo(key){
  	this.navCtrl.push(ShopPage, {key: key})
  }

  ngOnInit(){
      
    this.list = this.service.getList(this.item.db); 
    this.shops =  this.service.getList('Shops')
    this.categories =  this.service.getList('Categories')

  }

}
