import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
import {MainService} from '../../services/mainService';
import {ShopListPage} from '../shop-list/shop-list';
import { AngularFire,FirebaseListObservable } from 'angularfire2';




/*
  Generated class for the CategoriesPagePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [MainService],
  directives: [ShopListPage]

})



export class HomePage {

   // shops: Observable<any[]>;
   shops: any; 
   loader: any;


  constructor(private loadingCtrl: LoadingController,private service: MainService,private navCtrl: NavController ) {      
     this.showLoader();

  }


  showLoader() {
    this.loader = this.loadingCtrl.create({
      content: 'Porfavor espere....',
      dismissOnPageChange: true

    });
    this.loader.present().then(val =>{ 
      this.getAsyncData();
    })
     
  }

  dismissLoader(){
     this.loader.dismiss()
  }

  getAsyncData() {
    this.service.getList('Shops').subscribe(data => {
      this.shops = data;
      this.dismissLoader(); 
    })
  }

 // ionViewWillEnter() {
 //    // Starts the process 
 //     this.showLoader();
 //  }







}
