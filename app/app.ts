import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {LoginPage} from './pages/login/login';
import {MainPage} from './pages/main/main';



import {
    FIREBASE_PROVIDERS, defaultFirebase,
    AngularFire, firebaseAuthConfig, AuthProviders,
    AuthMethods
} from 'angularfire2';



@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [
  FIREBASE_PROVIDERS,    
  defaultFirebase({
    apiKey: "AIzaSyAID5-ytwfqmJlPPourVZ-QhVT0nowpEG8",
    authDomain: "zupa-d966c.firebaseapp.com",
    databaseURL: "https://zupa-d966c.firebaseio.com",
    storageBucket: "zupa-d966c.appspot.com",
    }),
   firebaseAuthConfig({
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
      remember: 'default',
      scope: ['email']
  })


  ]
})
export class MyApp {

  private rootPage: any;

  constructor(private platform: Platform) {
    this.rootPage = MainPage;

    // console.log(AuthProviders.Password, AuthMethods, AuthMethods)

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp, null, { 
        
    platforms:{
       ios:{
           // backButtonText: 'Atras',
           // tabsPlacement: 'bottom'
       }
   }

});
