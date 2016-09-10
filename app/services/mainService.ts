import { Injectable } from '@angular/core';
import { AngularFire,FirebaseObjectObservable } from 'angularfire2';
import 'rxjs';


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

  // setObject(object,key,value){
  //   this.af.database.object('/'+object+'/'+key).set(value).then(val =>{ 
  //     console.log(val)
  //   })
  // }

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
