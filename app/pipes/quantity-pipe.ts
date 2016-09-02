import {Pipe} from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'quantPipe'
})
export class QuantityPipe {
  transform(value, key:string) {

 		// console.log(_.find(value, {key: key}))

 		console.log(value, 'Iam')
 		return value

  }
}