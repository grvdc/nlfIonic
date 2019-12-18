import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-at-header',
  templateUrl: './cart-at-header.component.html',
  styleUrls: ['./cart-at-header.component.scss'],
})
export class CartAtHeaderComponent implements OnInit {
  @Input() cartCount: any;

  constructor(
    private router: Router

  ) { }

  ngOnInit() {}
 
  goToCartPage(){
    this.router.navigateByUrl('/cart-page');
  }

}
