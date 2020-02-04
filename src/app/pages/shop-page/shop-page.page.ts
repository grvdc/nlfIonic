import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.page.html',
  styleUrls: ['./shop-page.page.scss'],
})
export class ShopPagePage implements OnInit {
  testProductDetail = {
    id: 1,
    img: 'https://rukminim1.flixcart.com/image/714/857/k47cgi80/jacket/e/z/k/s-58452101-puma-original-imafn2dvgprxsvsb.jpeg?q=50',
    price: 25,
    jacketType: 'womenJackets',
    headerType:'Women Jacket',
    title:'Full Sleeve Solid Women Jacket',
    discription: 'A jacket is a mid-stomach–length garment for the upper body. A jacket typically has sleeves.',
    rate:3,
    productimages:[
      'https://rukminim1.flixcart.com/image/714/857/k47cgi80/jacket/e/z/k/s-58452101-puma-original-imafn2dvkjh5rm52.jpeg?q=50',
      'https://rukminim1.flixcart.com/image/714/857/k47cgi80/jacket/e/z/k/s-58452101-puma-original-imafn2dvgprxsvsb.jpeg?q=50',
      'https://rukminim1.flixcart.com/image/714/857/k47cgi80/jacket/e/z/k/s-58452101-puma-original-imafn2dvmkhggq3f.jpeg?q=50',
      'https://rukminim1.flixcart.com/image/714/857/k47cgi80/jacket/e/z/k/s-58452101-puma-original-imafn2dvzw8nfhnw.jpeg?q=50',
    ]
  }
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  testDetail() {
    console.log('datatttt',this.testProductDetail);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        testProductDetail: JSON.stringify(this.testProductDetail)
      }
    };
    this.router.navigate(['product-detail-page'], navigationExtras);
  }
}
