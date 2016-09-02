import { Component,ViewChild } from '@angular/core';
import { NavController,Slides,SegmentButton } from 'ionic-angular';
import {MainService} from '../../services/mainService';
import {Shop,Category,ItemCat, Item} from '../../models/models';
import {SubPage} from '../sub/sub';


@Component({
  templateUrl: 'build/pages/admin/admin.html',
  providers: [MainService],
  directives: [SubPage]

})

export class AdminPage {

  shops: any; 
  selectedSegment = "first";

  items: any = [ new ItemCat('first', 'Shops', new Shop(), 'Shops'), 
  new ItemCat('second', 'Categories', new Category(), 'Categories'),
  new ItemCat('third', 'Items', new Item(), 'Items')];



  @ViewChild('mySlider') sliderComponent: Slides;


  constructor(private navCtrl: NavController, private service: MainService ) {
       this.shops = this.service.getList('Shops');
  }


  onSegmentChanged(segmentButton: SegmentButton) {
    // console.log("Segment changed to", segmentButton.value);
    const selectedIndex = this.items.findIndex((slide) => {
      return slide.id === segmentButton.value;
    });

    this.sliderComponent.slideTo(selectedIndex);
  }

  onSlideChanged(slider: any) {
    // console.log('Slide changed', slider);
    const currentSlide = this.items[slider.activeIndex];
    this.selectedSegment = currentSlide.id;
  }
  

}
