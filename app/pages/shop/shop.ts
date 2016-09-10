import { Component,ViewChild } from '@angular/core';
import { NavController,NavParams, Slides,SegmentButton,Content,LoadingController } from 'ionic-angular';
import {MainService} from '../../services/mainService';
import {HelperService} from '../../services/helperService';
import {CategoryPage} from '../category/category';
import {BottomCartPage} from '../bottom-cart/bottom-cart';
import {Observable} from 'rxjs/Observable';
import 'rxjs';
import * as _ from 'lodash';


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
  items: Observable<any[]>;

  @ViewChild('mySlider') sliderComponent: Slides;
  @ViewChild(Content) content: Content;


  constructor(private loadingCtrl: LoadingController,private navCtrl: NavController, private params: NavParams,private service: MainService,
    private helper: HelperService) {
  		this.shop = this.service.getObject('Shops',this.params.get('key'));
      this.items = this.service.getListBy('Items', 'shop_key', this.params.get('key'));
      
      // this.showLoader();


       

  }

  createCategories(){
        this.items.subscribe(val =>{
            let dirty = []
            let cat = [];
            val.forEach(val =>{ 
                // this.service.getObject('Categories', val.category_key).subscribe(val =>{ 
                //    _.find(this.categories, {$key : val.$key}) ? '' : this.categories.push(val)
                // })
                dirty.push(val.category_key)
            })
             
            this.helper.removeDuplicates(dirty).forEach(val =>{ 
              cat.push(this.service.getObject('Categories', val))
            })

            Observable.forkJoin(cat).subscribe(val =>{ 
              console.log(val)
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
      this.createCategories(); 
     
  }





}
