import { Injectable } from '@angular/core';
import {ItemEntity} from './models';
import {cart,totalPrice} from '../stores/cart.store';
import * as _ from 'lodash';


// Here i am setting onBoarding
@Injectable() 
export class CartModel {

    cart = cart;

    constructor() {
    }

    addToCart(item){
        let index = _.findIndex(this.cart, { 'key': item.$key})
            if( index === -1) {
                this.cart.push(new ItemEntity(item.$key,item, 1));     
            }else{
               this.cart[index]['quantity']++
            }   
    }
    removeFromCart(key){
        let index = _.findIndex(this.cart, {key: key})
        if(index !== -1) {
            let quantity = this.cart[index]['quantity']; 
            if(quantity === 0) {
                this.cart.splice(index, 1);  
            }else{
                this.cart[index]['quantity']--
                this.cart[index]['quantity'] === 0 ? this.cart.splice(index, 1) : '' 
            }
        }

    }

  counter(key){
        let obj = _.find(this.cart, {key: key}) 
        return obj ? _.find(this.cart, {key: key})['quantity'] : 0;  
  }

  totalPrice(){
      let price = 0; 
      if(this.cart.length !== 0) {
           this.cart.forEach(val =>{ 
              price  += (val.item.price * val.quantity)
           })
      }
      return price
  }


 


}
