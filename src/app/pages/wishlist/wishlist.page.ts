import { Component, OnInit } from '@angular/core';
import { products } from '../../tsFiles/products';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {
  products = products.jackets;
  testData = [
    {
      category: 'Event',
      categoryList: [{
        name: 'Gaurav',
        image: 'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg',
      },
      {
        name: 'MahiPal',
        image: 'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg',
      },]
    },
    {
      category: 'Sports',
      categoryList: [{
          name:'Seema',
          image: 'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg',
        },
        {
          name:'Rahul',
          image: 'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg',
        }]

    }
  ]
  public searchTerm: string = "";
  public items: any;
  constructor() { }

  ngOnInit() {
    console.log("products", products.jackets);
  }

  setFilteredItems() {
    console.log("search string", this.searchTerm);
  // let data:any;
  // data = this.testData.filter(item => {
  //    return item.category.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
  //   });
  //   console.log("data",data);
  //   this.testData = data;
  //   console.log("search string", this.testData);
  }
}
