import {Pipe} from '@angular/core';
 
@Pipe({
  name: 'keysPipe'
})
export class KeysPipe {
  transform(value, args:string[]) {
   let keys = [];
    for (let key in value) {
      	keys.push({title: key, value: value[key]});
    }
    return keys;
  }
}