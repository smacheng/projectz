import { Injectable } from '@angular/core';
import {CartEntity} from '../entities/cart.entity';
import {Item} from '../models/models';

/**
* The cart service provides an way to store the cart in local store.
**/
@Injectable()
export class CartService {

  private _storage = localStorage;

  constructor() {
      this.initCart();
  }

  initCart () {

      // if we dont have  any cart history, create a empty cart
      if(!this._storage.getItem('cart')) {
          let emptyMap : { [key:string]:number; } = {};
          this.setCart(emptyMap);
      }

  }

  // saveListOfCartEntities(listOfCartEntries : CartEntity[]) {
  //     // reduce all the entities to a map
  //     let cartMap = listOfCartEntries.reduce(function(map, cartEntry, i) {
  //         map[cartEntry.product.id] = cartEntry;
  //         return map;
  //     }, {});

  //     // persist the map
  //     this.setCart(cartMap);

  // }

  /**
  * Returns all the products in the cart form the local storage
  *
  **/
  getAllCartEntities()  {
    // get the cart
    let myCartMap = this.getCart();
    let cartEntities : CartEntity[] = [];

    // convert the map to an array
    for (let key in myCartMap) {
      let value = myCartMap[key];
      cartEntities.push(value);
    }

    // return the array
    return Promise.resolve(cartEntities);

  }

  
  /**
  * Returns a specific cart entry from the cartEntry map
  **/
  getCartEntryByProductId(itemId) {

    let myCartMap = this.getCart();
    return Promise.resolve(myCartMap[itemId]);

  };


  /**
  * Will persist the product to local storage
  *
  **/
  addItemToCart(item){
      // product id , quantity
      let cartMap = this.getCart();

      //   // if the current key exists in the map , append value
        if(cartMap[item.$key] != undefined) {

            let cartInstance = cartMap[item.$key];
            cartInstance.quantity++;
            cartMap[item.$key] = cartInstance;

        } else {
          // if not, set default value
          cartMap[item.$key] = {
            'product':item,
            'quantity':1
          }
        }
      // // save the map
      this.setCart(cartMap);
  }

  removeItemFromCart(item){
      // product id , quantity
      let cartMap = this.getCart();

      //   // if the current key exists in the map , append value
        if(cartMap[item.$key] != undefined) {

            let cartInstance = cartMap[item.$key];
            cartInstance.quantity--;
            cartMap[item.$key] = cartInstance;

        } else {
          // if not remove 
          cartMap[item.$key].remove()
        }
      // // save the map
      this.setCart(cartMap);
  }








  /**
  * Retrive the cart from local storage
  **/
  private getCart() {

     let cartAsString = this._storage.getItem('cart');
     return JSON.parse(cartAsString);

  }
  /**
  * Persists the cart to local storage
  **/
  private setCart(cartMap) : void{

      this._storage.setItem('cart',JSON.stringify(cartMap));

  }
  clearTheCart() {

      this._storage.clear();

  }
}


// this._cartservice.getAllCartEntities().then(result => {
//       this.cartEntities = result;
//       console.log(this.cartEntities)
//       }).catch(err =>{ 
//          alert("something went wrong while fetching the products");
//       })