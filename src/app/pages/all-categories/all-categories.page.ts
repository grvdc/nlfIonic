import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.page.html',
  styleUrls: ['./all-categories.page.scss'],
})
export class AllCategoriesPage implements OnInit {
  categories = [
    { id:'cat01', image:"https://mylittleeinstein.com/wp-content/uploads/2019/08/valeria-zoncoll-AVGc87j_vNA-unsplash-1260x765.jpg",  name: 'baby' },
    { id:'cat02', image:"https://i.pinimg.com/originals/34/53/3c/34533ccb47d44579649a0c445501b99b.jpg", name: 'bags, shoes & Watches' },
    { id:'cat03', image:"https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/03/15/17/header.jpg?w968", name: 'beauty & makeup' },
    { id:'cat04', image:"https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png", name: 'body & health' },
    { id:'cat05', image:"https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png", name: 'books' },
    { id:'cat06', image:"https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png", name: 'Mobile & Accessories' },
    { id:'cat07', image:"https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png", name: 'clothing' },
    { id:'cat08', image:"https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png", name: 'electronics' },
    { id:'cat09', image:"https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png", name: 'home & kitchen' },
    { id:'cat10', image:"https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png", name: 'nail & manicure' },
    { id:'cat11', image:"https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png", name: 'outdoors' },
    { id:'cat12', image:"https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png", name: 'party supplies' },
    { id:'cat13', image:"https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png", name: 'pets supplies' },
    { id:'cat14', image:"https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png", name: 'sunglasses & Jwellery' },
    { id:'cat15', image:"https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png", name: 'games & toys' },


  ]
  constructor() { }

  ngOnInit() {
  }

}
