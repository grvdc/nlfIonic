import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.page.html',
  styleUrls: ['./all-categories.page.scss'],
})
export class AllCategoriesPage implements OnInit {
  data = 'view All'
  categories = [];
  id :any;
  categoriesTest = [
    { id:'cat01', image:"https://mylittleeinstein.com/wp-content/uploads/2019/08/valeria-zoncoll-AVGc87j_vNA-unsplash-1260x765.jpg",  name: 'baby' },
    { id:'cat02', image:"https://i.pinimg.com/originals/34/53/3c/34533ccb47d44579649a0c445501b99b.jpg", name: 'bags, shoes & Watches' },
    { id:'cat03', image:"https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/03/15/17/header.jpg?w968", name: 'beauty & makeup' },
    { id:'cat04', image:"https://thumbs.dreamstime.com/z/set-medical-supplies-cosmetic-healthcare-products-creative-abstract-medicine-pharmacy-industry-business-concept-group-55904969.jpg", name: 'body & health' },
    { id:'cat05', image:"https://d1nz104zbf64va.cloudfront.net/dt/a/o/top-7-books-that-changed-the-world.jpg", name: 'books' },
    { id:'cat06', image:"https://assets.mspimages.in/wp-content/uploads/2019/03/Redmi-7-2-696x435.jpg", name: 'Mobile & Accessories' },
    { id:'cat07', image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbBo6IQwJzHuaKIYnww5wVYNtwEtWa-d1BfEnKSEfcGxU9muY&s", name: 'clothing' },
    { id:'cat08', image:"http://www.a2ztaxcorp.com/wp-content/uploads/2018/10/Easy-2-Own-Furnishings-Laptop-Computers-Tablets.jpg", name: 'electronics' },
    { id:'cat09', image:"https://cashkaro.com/blog/wp-content/uploads/sites/5/2019/12/Home-Kitchen-Appliances-to-buy-from-BigBasket.jpg", name: 'home & kitchen' },
    { id:'cat10', image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHYHFQS_uSih0-7gnoFMWEVR5BoHb7_EXBxa5FfnCUjBjrK6LjsA&s", name: 'nail & manicure' },
    { id:'cat11', image:"https://7freres.com/web/wp-content/uploads/2017/05/PRODUITS-DE-JARDINAGE.jpg", name: 'outdoors' },
    { id:'cat12', image:"https://review.chinabrands.com/chinabrands/seo/image/20180130/20180130023637354537-1.jpg", name: 'party supplies' },
    { id:'cat13', image:"https://www.directsellingnews.com/wp-content/uploads/2019/08/Scentsy_Pet_products-1024x1024.jpg", name: 'pets supplies' },
    { id:'cat14', image:"https://previews.123rf.com/images/maximleshkovich/maximleshkovich1606/maximleshkovich160600040/60890474-flat-lay-feminini-clothes-and-accessories-collage-with-black-dress-glasses-high-heel-shoes-purse-wat.jpg", name: 'sunglasses & Jwellery' },
    { id:'cat15', image:"http://chehaby.com/wp-content/uploads/2015/09/toys-and-games.jpg", name: 'games & toys' },
  ]
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    
   this.categories.push({ id:'cat01', image:"https://mylittleeinstein.com/wp-content/uploads/2019/08/valeria-zoncoll-AVGc87j_vNA-unsplash-1260x765.jpg",  name: 'baby' });
  }

  ionViewWillEnter(){
    this.id = setInterval(() => this.anitest(),100);
  }
  anitest(){
    let length = this.categories.length;
   
    if(this.categoriesTest.length != length){
      this.categories.push(this.categoriesTest[length]);
    } else{
      clearInterval(this.id);
    }
       
  }

  test(data){
    console.log("testing Categories page data click", data);
    // if(data.id === 'cat01'){
    //   this.router.navigateByUrl('/shop-by-category');
    // }
    // if(data.id === 'cat09' ){
    //   this.homekitchen();
    // }
  }

  all(){
    this.data = "view All"
    this.categories = [
      { id:'cat01', image:"https://mylittleeinstein.com/wp-content/uploads/2019/08/valeria-zoncoll-AVGc87j_vNA-unsplash-1260x765.jpg",  name: 'baby' },
      { id:'cat02', image:"https://i.pinimg.com/originals/34/53/3c/34533ccb47d44579649a0c445501b99b.jpg", name: 'bags, shoes & Watches' },
      { id:'cat03', image:"https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/03/15/17/header.jpg?w968", name: 'beauty & makeup' },
      { id:'cat04', image:"https://thumbs.dreamstime.com/z/set-medical-supplies-cosmetic-healthcare-products-creative-abstract-medicine-pharmacy-industry-business-concept-group-55904969.jpg", name: 'body & health' },
      { id:'cat05', image:"https://d1nz104zbf64va.cloudfront.net/dt/a/o/top-7-books-that-changed-the-world.jpg", name: 'books' },
      { id:'cat06', image:"https://assets.mspimages.in/wp-content/uploads/2019/03/Redmi-7-2-696x435.jpg", name: 'Mobile & Accessories' },
      { id:'cat07', image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbBo6IQwJzHuaKIYnww5wVYNtwEtWa-d1BfEnKSEfcGxU9muY&s", name: 'clothing' },
      { id:'cat08', image:"http://www.a2ztaxcorp.com/wp-content/uploads/2018/10/Easy-2-Own-Furnishings-Laptop-Computers-Tablets.jpg", name: 'electronics' },
      { id:'cat09', image:"https://cashkaro.com/blog/wp-content/uploads/sites/5/2019/12/Home-Kitchen-Appliances-to-buy-from-BigBasket.jpg", name: 'home & kitchen' },
      { id:'cat10', image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHYHFQS_uSih0-7gnoFMWEVR5BoHb7_EXBxa5FfnCUjBjrK6LjsA&s", name: 'nail & manicure' },
      { id:'cat11', image:"https://7freres.com/web/wp-content/uploads/2017/05/PRODUITS-DE-JARDINAGE.jpg", name: 'outdoors' },
      { id:'cat12', image:"https://review.chinabrands.com/chinabrands/seo/image/20180130/20180130023637354537-1.jpg", name: 'party supplies' },
      { id:'cat13', image:"https://www.directsellingnews.com/wp-content/uploads/2019/08/Scentsy_Pet_products-1024x1024.jpg", name: 'pets supplies' },
      { id:'cat14', image:"https://previews.123rf.com/images/maximleshkovich/maximleshkovich1606/maximleshkovich160600040/60890474-flat-lay-feminini-clothes-and-accessories-collage-with-black-dress-glasses-high-heel-shoes-purse-wat.jpg", name: 'sunglasses & Jwellery' },
      { id:'cat15', image:"http://chehaby.com/wp-content/uploads/2015/09/toys-and-games.jpg", name: 'games & toys' },
    ]
  }
  homekitchen(){
    this.data ='Close';
    this.categories = [
      { id:'cat01', image:"https://rukminim1.flixcart.com/image/352/352/k0tw13k0/cookware-set/g/f/r/8091365308416-30841-prestige-original-imafkgyt8rnbjjet.jpeg?q=70",  name: 'Kitchen & cookware' },
      { id:'cat02', image:"https://i.pinimg.com/originals/34/53/3c/34533ccb47d44579649a0c445501b99b.jpg", name: 'home decor' },
    ]
  }

  goToShopPage(){
    this.router.navigateByUrl('/shop-page');
  }
}
