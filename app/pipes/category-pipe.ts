import {Pipe} from '@angular/core';
 
@Pipe({
  name: 'catPipe'
})
export class CategoryPipe {
  transform(value, key:string) {
 		let newValue = []; 

 		value.forEach(val =>{ 
 			if(val.category_key === key) {
 				newValue.push(val)
 			}
 		})	

 		return newValue
  }
}