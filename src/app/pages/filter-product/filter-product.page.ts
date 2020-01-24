import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.page.html',
  styleUrls: ['./filter-product.page.scss'],
})
export class FilterProductPage implements OnInit {
  dualValue2: any = {
    lower: 2500,
    upper: 6500
  };
  constructor() { }

  ngOnInit() {
  }

  print() {
    console.log("thisdsfgsg", this.dualValue2);
  }

}
