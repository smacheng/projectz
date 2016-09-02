import { Component } from '@angular/core';
import { NavController, MenuController, ViewController,LoadingController,NavParams } from 'ionic-angular';
import { AngularFire,FirebaseListObservable } from 'angularfire2';
import {Observable} from 'rxjs/Observable';


// import 'rxjs'
/*
  Generated class for the CategoriesPagePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/home/home.html'
})



export class HomePage {

   items: Observable<any[]>;
   loader: any;
   item: any; 


  constructor(private navCtrl: NavController, public menuCtrl: MenuController,public af: AngularFire,private loadingCtrl: LoadingController, private params: NavParams ) {

      this.showLoader(); 
      this.items = this.af.database.object('/categories');
      // this.item = params.get('item'); 
    }


  showLoader() {
    this.loader = this.loadingCtrl.create({
      content: 'Un ratito'
    });
    this.loader.present();
  }

  dismissLoader(){
     this.loader.dismiss()
  }

  ngOnInit() {

    this.items.subscribe((data) => {
        this.dismissLoader()
    })
  }








}
