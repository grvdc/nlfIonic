(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/cart-at-header/cart-at-header.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/cart-at-header/cart-at-header.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-button class=\"white ion-activatable\" fill=\"clear\"  (click)=\"goToCartPage()\">\n  <ion-icon name=\"cart\" style=\"font-size:22px !important\"></ion-icon>\n  <ion-badge color=\"success\" style=\"border-radius: 50%;\">{{cartCount}}</ion-badge>\n  <ion-ripple-effect></ion-ripple-effect>\n</ion-button>\n<!-- <mat-icon matBadge=\"15\" matBadgeColor=\"warn\">home</mat-icon> -->\n<!-- <ion-button id=\"cart-btn\"  (click)=\"cart()\">\n    <ion-icon name=\"cart\"></ion-icon>\n    <ion-badge id=\"cart-badge\">260k</ion-badge>\n</ion-button> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/side-nav/side-nav.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/side-nav/side-nav.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-menu side=\"start\" menuId=\"first\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-title>Start Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-item>Menu Item</ion-item>\n      <ion-item>Menu Item</ion-item>\n      <ion-item>Menu Item</ion-item>\n      <ion-item>Menu Item</ion-item>\n      <ion-item>Menu Item</ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n<ion-router-outlet main></ion-router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"bg-color\" >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"white\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"!searchInput\" >Home </ion-title>\n    <ion-buttons slot=\"end\">\n      <app-cart-at-header [cartCount]=\"cartBadge\"></app-cart-at-header>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-skeleton-text animated *ngIf=\"skeletonText\"></ion-skeleton-text>\n  <ion-slides pager=\"false\" [options]=\"slideOpts\" *ngIf=\"!skeletonText\">\n    <ion-slide *ngFor=\"let item of slide\">\n      <img [src]=\"item.image\" >\n      <div class=\"myOverlay\">\n        <h3>Sale Sale !</h3>\n        <h4>50% OFF</h4>\n      </div>\n    </ion-slide>\n  </ion-slides>\n  \n  <ion-row style=\"padding-top:10px; padding-right: 10px;\">\n    <ion-col style=\"padding-left: 10px !important;padding-right: 0 !important;padding-top:0 !important\" sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"6\"  *ngFor=\"let product of products;index as index\" >\n      <ion-card >\n        <img [src]=\"product.img\" style=\"height: 185px !important\" (click)=\"goToProductDetailPage(product.id)\" />\n        <div style=\" width: 100%;\n        padding-top: 5%;\n        text-align: center;\n        position: absolute;\n        z-index: 99;\n        /* bottom: 31%; */\n        opacity: 0.5;\n        top: 0px;\n        color: white;\n        font-weight: bold;\n        /* background-color: #dc0000; */\n        left: 40%;\n        font-size:20px;\n        \"><ion-icon name=\"heart\" style=\"color:rgb(106, 112, 108)\" (click)=\"wishlist(product.id)\" [ngClass]=\"{wish: product.wish}\"></ion-icon></div>\n        <ion-card-header style=\"padding-top: 0px;padding-bottom: 0;\">\n          <ion-card-title><h6 (click)=\"goToProductDetailPage(product.id)\" style=\"margin-bottom: -10px;\">Full Sleeve Solid Women Jacket</h6></ion-card-title>\n          <ion-card-subtitle >\n              <ion-row >\n                  <ion-col size=\"4\" style=\"padding-left: 0 !important;\"> \n                   \n                      <ion-badge color=\"success\">4 <ion-icon name=\"star\"></ion-icon></ion-badge>\n\n                     \n                   </ion-col>\n                   <ion-col size=\"8\" style=\"text-align:right\">\n                    <label style=\"color:black\"><s style=\"color:grey\">$ 28</s> $ {{product.price}}</label>\n                    </ion-col>\n              </ion-row>\n            </ion-card-subtitle>\n        </ion-card-header>\n        <ion-button expand=\"full\" color=\"dark\" style=\"margin:0\" (click)=\"addToCart(product)\">Add to Cart\n        </ion-button>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>\n<!-- <app-side-nav></app-side-nav> -->\n\n"

/***/ }),

/***/ "./src/app/components/cart-at-header/cart-at-header.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/cart-at-header/cart-at-header.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".myOverlay {\n  width: 100%;\n  padding-top: 5%;\n  text-align: center;\n  position: absolute;\n  z-index: 99;\n  bottom: 0%;\n  opacity: 0.5;\n  color: white;\n  font-weight: bold;\n}\n\n#cart-btn {\n  position: relative;\n}\n\n#cart-badge {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ViYy0yMS9Eb2N1bWVudHMvaW9uYXBwL2dpdC9uZXdHaXQvbmxmSW9uaWMvc3JjL2FwcC9jb21wb25lbnRzL2NhcnQtYXQtaGVhZGVyL2NhcnQtYXQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NhcnQtYXQtaGVhZGVyL2NhcnQtYXQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUVBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQUo7O0FESUU7RUFDRSxrQkFBQTtBQ0RKOztBRElDO0VBQ0csa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJ0LWF0LWhlYWRlci9jYXJ0LWF0LWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teU92ZXJsYXl7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gaGVpZ2h0OiA0MCU7XG4gICAgcGFkZGluZy10b3A6NSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA5OTtcbiAgICBib3R0b206IDAlO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICBcbiAgfVxuXG4gICNjYXJ0LWJ0biB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuIH1cbiBcbiAjY2FydC1iYWRnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gfSIsIi5teU92ZXJsYXkge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk7XG4gIGJvdHRvbTogMCU7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI2NhcnQtYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jY2FydC1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/cart-at-header/cart-at-header.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/cart-at-header/cart-at-header.component.ts ***!
  \***********************************************************************/
/*! exports provided: CartAtHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartAtHeaderComponent", function() { return CartAtHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let CartAtHeaderComponent = class CartAtHeaderComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    goToCartPage() {
        this.router.navigateByUrl('/cart-page');
    }
};
CartAtHeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CartAtHeaderComponent.prototype, "cartCount", void 0);
CartAtHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart-at-header',
        template: __webpack_require__(/*! raw-loader!./cart-at-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/cart-at-header/cart-at-header.component.html"),
        styles: [__webpack_require__(/*! ./cart-at-header.component.scss */ "./src/app/components/cart-at-header/cart-at-header.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], CartAtHeaderComponent);



/***/ }),

/***/ "./src/app/components/side-nav/side-nav.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/side-nav/side-nav.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/side-nav/side-nav.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/side-nav/side-nav.component.ts ***!
  \***********************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SideNavComponent = class SideNavComponent {
    constructor() { }
    ngOnInit() { }
};
SideNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-side-nav',
        template: __webpack_require__(/*! raw-loader!./side-nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/side-nav/side-nav.component.html"),
        styles: [__webpack_require__(/*! ./side-nav.component.scss */ "./src/app/components/side-nav/side-nav.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SideNavComponent);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _components_cart_at_header_cart_at_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/cart-at-header/cart-at-header.component */ "./src/app/components/cart-at-header/cart-at-header.component.ts");
/* harmony import */ var _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/side-nav/side-nav.component */ "./src/app/components/side-nav/side-nav.component.ts");
/* harmony import */ var ionic4_rating__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ionic4-rating */ "./node_modules/ionic4-rating/dist/index.js");










let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            ionic4_rating__WEBPACK_IMPORTED_MODULE_9__["IonicRatingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"], _components_cart_at_header_cart_at_header_component__WEBPACK_IMPORTED_MODULE_7__["CartAtHeaderComponent"], _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_8__["SideNavComponent"]],
        entryComponents: [_components_cart_at_header_cart_at_header_component__WEBPACK_IMPORTED_MODULE_7__["CartAtHeaderComponent"], _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_8__["SideNavComponent"]],
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ion-activatable {\n  position: relative;\n  overflow: hidden;\n}\n\nion-content ion-skeleton-text {\n  width: 100%;\n  height: 230px;\n}\n\nion-content ion-slides ion-slide img {\n  width: 100% !important;\n}\n\nion-content ion-row ion-col {\n  padding: 10px !important;\n}\n\nion-content ion-row ion-col ion-card {\n  margin: 0px !important;\n}\n\n.myOverlay {\n  width: 100%;\n  padding-top: 5%;\n  text-align: center;\n  position: absolute;\n  z-index: 99;\n  bottom: 0%;\n  opacity: 0.5;\n  color: white;\n  font-weight: bold;\n  background-color: #dc0000;\n}\n\n.segmentWidth {\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ViYy0yMS9Eb2N1bWVudHMvaW9uYXBwL2dpdC9uZXdHaXQvbmxmSW9uaWMvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0FKOztBRElFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNESjs7QURLTTtFQUNFLHNCQUFBO0FDSFI7O0FEUUk7RUFDRSx3QkFBQTtBQ05OOztBRE9NO0VBQ0Usc0JBQUE7QUNMUjs7QURZRTtFQUNFLFdBQUE7RUFFQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDVko7O0FEWUU7RUFDRSxzQkFBQTtBQ1RKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmlvbi1hY3RpdmF0YWJsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuaW9uLWNvbnRlbnR7XG4gIGlvbi1za2VsZXRvbi10ZXh0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDoyMzBweDtcbiAgfVxuICBpb24tc2xpZGVze1xuICAgIGlvbi1zbGlkZXtcbiAgICAgIGltZ3tcbiAgICAgICAgd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpb24tcm93e1xuICAgIGlvbi1jb2x7XG4gICAgICBwYWRkaW5nOjEwcHggIWltcG9ydGFudDtcbiAgICAgIGlvbi1jYXJke1xuICAgICAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4gIFxuICAubXlPdmVybGF5e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIGhlaWdodDogNDAlO1xuICAgIHBhZGRpbmctdG9wOjUlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogOTk7XG4gICAgYm90dG9tOiAwJTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzAwMDA7XG4gIH1cbiAgLnNlZ21lbnRXaWR0aHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9IiwiLmlvbi1hY3RpdmF0YWJsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXNrZWxldG9uLXRleHQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMzBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1zbGlkZXMgaW9uLXNsaWRlIGltZyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCBpb24tcm93IGlvbi1jb2wge1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCBpb24tcm93IGlvbi1jb2wgaW9uLWNhcmQge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubXlPdmVybGF5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5O1xuICBib3R0b206IDAlO1xuICBvcGFjaXR5OiAwLjU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzAwMDA7XG59XG5cbi5zZWdtZW50V2lkdGgge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tsFiles_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tsFiles/products */ "./src/app/tsFiles/products.ts");





let HomePage = class HomePage {
    constructor(menu, router, platform) {
        this.menu = menu;
        this.router = router;
        this.platform = platform;
        this.infos = [];
        // ref = firebase.database().ref('infos/');
        this.searchtext = '';
        this.skeletonText = true;
        this.segmentWidth = 'segmentWidth';
        this.searchInput = false;
        this.search = false;
        this.cartBadge = 0;
        this.slideOpts = {
            initialSlide: 1,
            speed: 400,
            autoplay: true,
            loop: true,
        };
        this.slide = [
            { id: 1, image: 'https://freedesignfile.com/upload/2016/12/Shopping-woman-with-bank-card-OK-HD-picture.jpg' },
            { id: 2, image: 'https://freedesignfile.com/upload/2017/06/Expression-cheerful-shopping-woman-Stock-Photo.jpg' },
            { id: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_vC8fUj8ZWXkPvzLdsJlyKauSauCoiKxa0RBgTmQNxDAgqu7O&s' },
        ];
        this.products = _tsFiles_products__WEBPACK_IMPORTED_MODULE_4__["products"].jackets;
        this.menu.enable(true);
        this.platform.backButton.subscribe(() => {
            console.log("testbk");
        });
        let data = [];
        data = JSON.parse(localStorage.getItem('products'));
        if (!data) {
            this.cartBadge = 0;
        }
        else {
            this.cartBadge = data.length;
        }
    }
    ngOnInit() {
        this.skeletonText = true;
        this.menu.enable(true, 'custom');
        setTimeout(() => {
            this.onetwo();
        }, 3000);
    }
    openmenu() {
        this.menu.open();
    }
    logout() {
        localStorage.removeItem("login");
        this.router.navigateByUrl('/login-page');
    }
    onetwo() {
        this.skeletonText = !this.skeletonText;
    }
    addToCart(data) {
        this.menu.enable(true, 'first');
        this.menu.open('first');
        let a = [];
        if (!JSON.parse(localStorage.getItem('products'))) {
            a.push(data);
        }
        else {
            a = JSON.parse(localStorage.getItem('products'));
            a.push(data);
        }
        console.log('a', a);
        localStorage.setItem('products', JSON.stringify(a));
        this.cartBadge = a.length;
    }
    showSearch() {
        this.searchtext = '';
        this.search = !this.search;
        console.log("search", this.search);
        if (this.search) {
            this.searchInput = !this.searchInput;
        }
        else {
            setTimeout(() => {
                this.searchInput = !this.searchInput;
            }, 1900);
        }
    }
    wishlist(id) {
        _tsFiles_products__WEBPACK_IMPORTED_MODULE_4__["products"].jackets.map((item) => {
            if (item.id == id) {
                item['wish'] ? item['wish'] = !item['wish'] : item['wish'] = true;
            }
        });
    }
    goToProductDetailPage(id) {
        console.log('datatttt', id);
        let navigationExtras = {
            queryParams: {
                special: JSON.stringify(id)
            }
        };
        this.router.navigate(['product-detail-page'], navigationExtras);
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map