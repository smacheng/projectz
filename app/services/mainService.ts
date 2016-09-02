import { Injectable } from '@angular/core';
import { AngularFire,FirebaseObjectObservable } from 'angularfire2';


// Here i am setting onBoarding
@Injectable() 
export class MainService {




  constructor(public af: AngularFire) {
        
  }

  getList(list){
     return this.af.database.list(list)
  }

  removeObject(object,key){  
     return this.af.database.object('/'+object+'/'+key).remove()
  }

  pushObject(list, object){
		return this.af.database.list(list).push(object)
  }
  getObject(object,key){
    return this.af.database.object('/'+object+'/'+key)
  }
  
  getListBy(list,orderBy,equalTo){
      return this.af.database.list(list, {
      query: {
        orderByChild: orderBy,
        equalTo: equalTo
      }
    });
  }




}
