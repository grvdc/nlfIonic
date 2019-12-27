import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassLocalData {
    cartBadge = 0 ;
  constructor() { }

  changeCartNumber(value) {
    this.cartBadge = value;
    return this.cartBadge;    
  }
}
