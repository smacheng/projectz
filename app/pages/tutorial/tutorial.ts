import { Component } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';
import { MainPage } from '../main/main';



interface Slide {
  title: string;
  description: string;
  image: string;
}

@Component({
  templateUrl: 'build/pages/tutorial/tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;

  constructor(public navCtrl: NavController, public menu: MenuController) {
    this.slides = [
      {
        title: 'Welcome to <b>ICA</b>',
        description: 'The <b>Ionic Conference App</b> is a practical preview of the Ionic Framework in action, and a demonstration of proper code use.',
        image: 'img/ica-slidebox-img-1.png',
      }
    ];
  }

  startApp() {
    this.navCtrl.push(MainPage);
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd;
  }

  ionViewDidEnter() {
    console.log('heeeelo')
    // the root left menu should be disabled on the tutorial page
    console.log(this.menu)
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    console.log('left')
    this.menu.enable(true);
  }

}
