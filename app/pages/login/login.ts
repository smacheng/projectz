import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { MainPage } from '../main/main';
import { TutorialPage } from '../tutorial/tutorial';



// Here i am setting onBoarding

@Component({
  templateUrl: 'build/pages/login/login.html'
})

export class LoginPage {

	backimg: string; 

  constructor(private navCtrl: NavController) {

  	this.backimg = 'img/Zupa_background.JPG';
  
  }


  withFb(){
  	alert('cwjenl')
  }

  login(){
      this.navCtrl.push(TutorialPage);

  }

}
