import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.page.html',
  styleUrls: ['./filter-product.page.scss'],
})
export class FilterProductPage implements OnInit {
  dualValue2 = {
    lower: 2500,
    upper: 6500
  };
  max= 0;
  min = 0;
  radio:any;
  constructor() { }

  ngOnInit() {
    this.max= this.dualValue2.upper;
    this.min = this.dualValue2.lower;
  }

  print() {
    console.log("thisdsfgsg", this.dualValue2);
    // this.dualValue2 = {
    //   lower: this.min,
    //   upper: this.max
    // };
    console.log("Radio",this.radio);
  }

}
