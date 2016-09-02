import { Component,ViewChild } from '@angular/core';
import { NavController,NavParams, Slides,SegmentButton,Content } from 'ionic-angular';
import {MainService} from '../../services/mainService';
import {HelperService} from '../../services/helperService';
import {CategoryPage} from '../category/category';
import {BottomCartPage} from '../bottom-cart/bottom-cart';



/*
  Generated class for the ShopPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/shop/shop.html',
  providers: [MainService, HelperService],
  directives: [CategoryPage,BottomCartPage]


})
export class ShopPage {

  shop: any;
  categories: any = []; 
  selectedSegment:any;
  items: any; 

  @ViewChild('mySlider') sliderComponent: Slides;
  @ViewChild(Content) content: Content;


  constructor(private navCtrl: NavController, private params: NavParams,private service: MainService,private helper: HelperService) {
  		this.shop = this.service.getObject('Shops',this.params.get('key'));
      this.items = this.service.getListBy('Items', 'shop_key', this.params.get('key'));     
    
  }

  createCategories(){

      var dirtyCategories = [] 
      // Do I really need all this ? 
      this.items.subscribe(val =>{ 
              val.forEach(val =>{ 
                  dirtyCategories.push(val.category_key)
              })
          })
      this.helper.removeDuplicates(dirtyCategories).forEach(val =>{   
          this.service.getObject('Categories', val).subscribe(val =>{ 
            this.categories.push(val)
          })
      })
  }

  onSegmentChanged(segmentButton: SegmentButton) {
    // console.log("Segment changed to", segmentButton.value);
    const selectedIndex = this.categories.findIndex((slide) => {
      return slide.$key === segmentButton.value;
    });

    this.sliderComponent.slideTo(selectedIndex);
  
  }

  onSlideChanged(slider: any) {
    const currentSlide = this.categories[slider.activeIndex];
    this.selectedSegment = currentSlide.$key;
  }

   


  ngOnInit() {
      this.content.resize();
      this.createCategories()
      this.selectedSegment = this.categories[0].$key
      
  }





}
