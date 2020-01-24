import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { products } from '../../tsFiles/products';
import { IonContent } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.page.html',
  styleUrls: ['./product-detail-page.page.scss'],
  encapsulation: ViewEncapsulation.None

})
export class ProductDetailPagePage implements OnInit {
  // @ViewChild(IonContent) content: IonContent;
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 3.3
  };
  products = products.jackets;
  data: any;
  productImages = [];
  product: any;
  rate = 4;
  color = '';
  cartBadge = 0;
  qty = "1";
  size = ['S', 'M', 'L', 'XL'];
  selectSize = '';
  fromCart: boolean = false;
  testdata: any;
  testProductImage = "";
  border="";
  testImageList = [
    {
      img: "https://rukminim1.flixcart.com/image/714/857/jvgzl3k0/top/g/g/e/m-t0575-chimpaaanzee-original-imafgcqahs27dhjn.jpeg?q=50",
      highlighted: false
    },
    {
      img: "https://rukminim1.flixcart.com/image/714/857/jvgzl3k0/top/g/g/e/m-t0575-chimpaaanzee-original-imafgcqbz4vkvt6g.jpeg?q=50",
      highlighted: false
    },

    {
      img: "https://rukminim1.flixcart.com/image/714/857/jvgzl3k0/top/g/g/e/m-t0575-chimpaaanzee-original-imafgcqawd4dhjh4.jpeg?q=50",
      highlighted: false
    },
    {
      img: "https://rukminim1.flixcart.com/image/714/857/jvgzl3k0/top/g/g/e/l-t0575-chimpaaanzee-original-imafgcqarb7efctn.jpeg?q=50",
      highlighted: false
    }

  ]
  constructor(private route: ActivatedRoute, private router: Router,
    public toastController: ToastController
  ) {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.data = JSON.parse(params.special);
        this.fromCart = params.fromCart
      } else if (params && params.testProductDetail) {
        this.product = JSON.parse(params.testProductDetail);
      }
    });
    let data = [];
    data = JSON.parse(localStorage.getItem('products'));
    if (!data) {
      this.cartBadge = 0;
    } else {
      this.cartBadge = data.length;
    }

  }

  ionViewWillEnter() {
    console.log("fro cart", this.product);
    this.highlightedOff("https://rukminim1.flixcart.com/image/714/857/jvgzl3k0/top/g/g/e/m-t0575-chimpaaanzee-original-imafgcqahs27dhjn.jpeg?q=50")
  }
  ngOnInit() {
    if (this.data) {
      products.jackets.map((item) => {
        if (this.data === item.id) {
          this.product = item;
          item.productimages.map((newitem) => {
            this.productImages.push(newitem);
          })

        }
      })
    } else {
      this.product['productimages'].map((item) => {
        this.productImages.push(item);
      })
    }


  }

  onModelChange(event) {
    console.log(event);
  }
  wishlist(id) {
    products.jackets.map((item) => {
      if (item.id == id) {
        item['wish'] ? item['wish'] = !item['wish'] : item['wish'] = true;
      }
      if (item['wish']) {
        this.presentToast();
      }
    })

  }

  addToCart(data) {
    // this.menu.enable(true, 'first');
    // this.menu.open('first');
    let a = [];
    if (!JSON.parse(localStorage.getItem('products'))) {
      a.push(data);
    } else {
      a = JSON.parse(localStorage.getItem('products'));
      a.push(data)
    }
    console.log('a', a);
    localStorage.setItem('products', JSON.stringify(a));
    this.cartBadge = a.length;
  }

  sendToInvoicePage() {
    console.log("daatatat", this.product);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        single: JSON.stringify(this.product)
      }
    };
    this.product['qty'] = parseInt(this.qty);

    localStorage.setItem('singleItem', JSON.stringify(this.product));
    this.router.navigate(['address-screen']);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Item saved to wishlist.',
      duration: 2000,
      // color: 'light',
      animated: true,
    });
    toast.present();
  }
  // ScrollToTop(){
  //   this.content.scrollToTop(1500);
  // }

  goTest() {
    this.router.navigate(['test']);
  }

  heighlightedOnn(img) {
    this.testProductImage = img;
    this.testImageList.map((item) => {
      if (item.img === img) {
        item.highlighted = true;
      }
    })
  }
  highlightedOff(img) {
    console.log("imgClick", img);
    this.testImageList.forEach((values) => {
      values.highlighted = false;
    });
    this.heighlightedOnn(img);
  }

  checkColor(color) {
    this.color = color;
    this.getColor(this.selectSize);
  }
  getColor(size) {
    this.selectSize = size;
    switch (this.color) {
      case 'purple':
        console.log("in purple");
        this.border = 'solid 2px #4f39f5';
        break;
      case 'green':
          console.log("in green");
        this.border = 'solid 2px #096f29';
        break;
      case 'pink':
          console.log("in pink");
        this.border = 'solid 2px #ff7979';
        break;
      case 'red':
          console.log("in red");
        this.border = 'solid 2px red';
        break;
      case '':
          console.log("in black");
        this.border = 'solid 2px black';
        break;

    }
  }
}
