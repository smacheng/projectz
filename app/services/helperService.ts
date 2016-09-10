import { Injectable } from '@angular/core';
import * as _ from 'lodash';


// Here i am setting onBoarding
@Injectable() 
export class HelperService {


  constructor() {
        
  }

  // removeDuplicates(array){
  //   return _.map(
  //       _.uniq(
  //         _.map(array, function(obj){
  //           return JSON.stringify(obj);
  //         })
  //         ), function(obj) {
  //         return JSON.parse(obj);
  //       }
  //       );
  // }


  removeDuplicates(array){

       return array.filter(function(elem, index, self) {
              return index == self.indexOf(elem);
            })
  }


}
