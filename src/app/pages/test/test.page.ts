import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: false,
    loop: true,
  };
  sliderThree:any;
  myImages = [
    {
      path: 'https://rukminim1.flixcart.com/image/714/857/k1s6ljk0/jacket/e/r/r/s-metro-j025-grey-metronaut-original-imafhaynz2qyxzhz.jpeg?q=50',
      width: 'natural_width',
      height: 'natural_height'
    },
    {
      path: 'https://rukminim1.flixcart.com/image/714/857/k1s6ljk0/jacket/e/r/r/s-metro-j025-grey-metronaut-original-imafhaynz2qyxzhz.jpeg?q=50',
      width: 'natural_width',
      height: 'natural_height'
    },{
      path: 'https://rukminim1.flixcart.com/image/714/857/k1s6ljk0/jacket/e/r/r/s-metro-j025-grey-metronaut-original-imafhaynz2qyxzhz.jpeg?q=50',
      width: 'natural_width',
      height: 'natural_height'
    },{
      path: 'https://rukminim1.flixcart.com/image/714/857/k1s6ljk0/jacket/e/r/r/s-metro-j025-grey-metronaut-original-imafhaynz2qyxzhz.jpeg?q=50',
      width: 'natural_width',
      height: 'natural_height'
    },{
      path: 'https://rukminim1.flixcart.com/image/714/857/k1s6ljk0/jacket/e/r/r/s-metro-j025-grey-metronaut-original-imafhaynz2qyxzhz.jpeg?q=50',
      width: 'natural_width',
      height: 'natural_height'
    },{
      path: 'https://rukminim1.flixcart.com/image/714/857/k1s6ljk0/jacket/e/r/r/s-metro-j025-grey-metronaut-original-imafhaynz2qyxzhz.jpeg?q=50',
      width: 'natural_width',
      height: 'natural_height'
    },

  ];
  
  slideOptsThree = {
    initialSlide: 0,
    slidesPerView: 3
  };
  constructor() 
  {this.sliderThree =  {
    isBeginningSlide: true,
    isEndSlide: false,
    slidesItems: [
      {
        id: 11,
        image: 'https://rukminim1.flixcart.com/image/714/857/k1s6ljk0/jacket/e/r/r/s-metro-j025-grey-metronaut-original-imafhaynz2qyxzhz.jpeg?q=50'
      },
      {
        id: 12,
        image: 'https://rukminim1.flixcart.com/image/800/960/k29bvrk0/jacket/5/7/q/m-fulljacket-006adiesrn-christy-world-original-imafhnhqzqj7yg7r.jpeg?q=50'
      },
      {
        id: 13,
        image: 'https://rukminim1.flixcart.com/image/800/960/k4324y80/jacket/h/9/y/m-219045136-4-monte-carlo-original-imafmy45whczfyfh.jpeg?q=50'
      },
      {
        id: 14,
        image: 'https://rukminim1.flixcart.com/image/714/857/k47cgi80/jacket/g/d/v/m-adaw19jk022a-adrenex-original-imafn5w4yjvgs4hg.jpeg?q=50'
      },
      {
        id: 15,
        image: 'https://rukminim1.flixcart.com/image/714/857/k1s6ljk0/jacket/e/r/r/s-metro-j025-grey-metronaut-original-imafhaynz2qyxzhz.jpeg?q=50'
      }
    ] }
  }

  ngOnInit() {
  }

  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }
 
  //Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }
 
  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }
 
  //Call methods to check if slide is first or last to enable disbale navigation  
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }
 
  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }

}
