(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/cart-at-header/cart-at-header.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/cart-at-header/cart-at-header.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-button class=\"white ion-activatable\" fill=\"clear\"  (click)=\"goToCartPage()\">\n  <ion-icon name=\"cart\" style=\"font-size:22px !important\"></ion-icon>\n  <ion-badge color=\"success\" style=\"border-radius: 50%;\">{{cartCount}}</ion-badge>\n  <ion-ripple-effect></ion-ripple-effect>\n</ion-button>\n\n<!-- <ion-button id=\"cart-btn\"  (click)=\"cart()\">\n    <ion-icon name=\"cart\"></ion-icon>\n    <ion-badge id=\"cart-badge\">260k</ion-badge>\n</ion-button> -->"

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

module.exports = "<ion-header>\n  <ion-toolbar class=\"bg-color\" >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"white\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"!searchInput\" >Home </ion-title>\n    <ion-buttons slot=\"end\">\n      <app-cart-at-header [cartCount]=\"cartBadge\"></app-cart-at-header>\n    </ion-buttons>\n    <!-- <ion-segment slot=\"end\" style=\"width: 45%;align-items: center;justify-content: flex-end;transition: width 2s;\"\n      [ngClass]=\"{segmentWidth: search}\"> -->\n      <!-- <ion-icon name=\"search\"  style=\"font-size:22px\" (click)=\"showSearch()\"></ion-icon> -->\n      <!-- <ion-input style=\"border-bottom: solid 1px #FFF !important;text-align: left;\" *ngIf=\"searchInput\" [(ngModel)]=\"searchtext\" name=\"searchtext\"></ion-input>\n      <ion-button class=\"white ion-activatable\" fill=\"clear\" *ngIf=\"searchtext\">\n        <ion-icon name=\"close\" style=\"font-size:22px\" (click)=\"showSearch()\"></ion-icon>\n        <ion-ripple-effect></ion-ripple-effect>\n      </ion-button> -->\n     \n \n    <!-- </ion-segment> -->\n\n  </ion-toolbar>\n\n  <!-- <ion-toolbar class=\"bg-color\" *ngIf=\"search\">\n      <ion-segment slot=\"start\" style=\"width: 45%;align-items: center;justify-content: flex-end;transition: width 2s;\">\n          <ion-searchbar ></ion-searchbar>\n      </ion-segment>\n   \n   \n  </ion-toolbar> -->\n</ion-header>\n\n\n\n<ion-content>\n  <ion-skeleton-text animated style=\"width: 100%; height:230px\" *ngIf=\"skeletonText\"></ion-skeleton-text>\n  <ion-slides pager=\"false\" [options]=\"slideOpts\" *ngIf=\"!skeletonText\">\n    <ion-slide *ngFor=\"let item of slide\">\n      <img [src]=\"item.image\" style=\"width:100%;\">\n      <div class=\"myOverlay\">\n        <h3>Sale Sale !</h3>\n        <h4>50% OFF</h4>\n      </div>\n    </ion-slide>\n  </ion-slides>\n  \n  <ion-row>\n    <ion-col size=\"6\" *ngFor=\"let product of products;\" style=\"padding:10px\">\n      <ion-card style=\"margin: 0px;\">\n        <img [src]=\"product.img\" style=\"height: 185px !important\" />\n        <ion-card-header style=\"padding-top: 0px;\">\n          <ion-card-title><h5>Full Sleeve Solid Women Jacket</h5></ion-card-title>\n          <ion-card-subtitle style=\"text-align: center;\">\n                    $ {{product.price}} \n            </ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content style=\"text-align: center;\">\n            Some text about the jeans....\n        </ion-card-content>\n        <ion-button expand=\"full\" color=\"dark\" (click)=\"addToCart(product)\">Add to Cart\n        </ion-button>\n      </ion-card>\n    </ion-col>\n\n  </ion-row>\n</ion-content>\n<!-- <app-side-nav></app-side-nav> -->\n"

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

module.exports = ".ion-activatable {\n  position: relative;\n  overflow: hidden;\n}\n\nion-item ion-chip {\n  height: 20px;\n  background: darkgrey;\n  color: grey;\n}\n\n.myOverlay {\n  width: 100%;\n  padding-top: 5%;\n  text-align: center;\n  position: absolute;\n  z-index: 99;\n  bottom: 0%;\n  opacity: 0.5;\n  color: white;\n  font-weight: bold;\n  background-color: #dc0000;\n}\n\n.segmentWidth {\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ViYy0yMS9Eb2N1bWVudHMvaW9uYXBwL2dpdC9uZXdHaXQvbmxmSW9uaWMvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREdJO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQ0FSOztBREtFO0VBQ0UsV0FBQTtFQUVBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUNISjs7QURLRTtFQUNFLHNCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaW9uLWFjdGl2YXRhYmxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuaW9uLWl0ZW17XG4gICAgaW9uLWNoaXB7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogZGFya2dyZXk7XG4gICAgICAgIGNvbG9yOiBncmV5XG4gICAgfVxufVxuXG4gIFxuICAubXlPdmVybGF5e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIGhlaWdodDogNDAlO1xuICAgIHBhZGRpbmctdG9wOjUlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogOTk7XG4gICAgYm90dG9tOiAwJTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzAwMDA7XG4gIH1cbiAgLnNlZ21lbnRXaWR0aHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9IiwiLmlvbi1hY3RpdmF0YWJsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaW9uLWl0ZW0gaW9uLWNoaXAge1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6IGRhcmtncmV5O1xuICBjb2xvcjogZ3JleTtcbn1cblxuLm15T3ZlcmxheSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTtcbiAgYm90dG9tOiAwJTtcbiAgb3BhY2l0eTogMC41O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMwMDAwO1xufVxuXG4uc2VnbWVudFdpZHRoIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn0iXX0= */"

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
    test() {
        console.log("working focus searchbar");
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