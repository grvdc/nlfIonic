(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-shop-bycaegorie-shop-bycaegorie-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/shop-bycaegorie/shop-bycaegorie.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/shop-bycaegorie/shop-bycaegorie.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"!showError\">\n  <ion-toolbar class=\"bg-color\">\n    <ion-title>{{data.header}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"white\"></ion-back-button>\n      <!-- <ion-menu-button class=\"white\"></ion-menu-button> -->\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"!showError\">\n    <ion-row style=\"padding-top:10px; padding-right: 10px;\">\n        <!-- <ion-col size=\"6\" *ngFor=\"let product of productDisplay;\" style=\"padding:10px\">\n          <ion-card style=\"margin: 0px;\">\n            <img [src]=\"product.img\" style=\"height: 185px !important\" (click)=\"goToProductDetailPage(product.id)\"/>\n            <ion-card-header style=\"padding-top: 0px;\">\n              <ion-card-title><h5>Full Sleeve Solid Women Jacket</h5></ion-card-title>\n              <ion-card-subtitle style=\"text-align: center;\">\n                        $ {{product.price}} \n                </ion-card-subtitle>\n            </ion-card-header>\n            <ion-card-content style=\"text-align: center;\">\n                Some text about the jeans....\n            </ion-card-content>\n            <ion-button expand=\"full\" color=\"dark\" (click)=\"addToCart(product)\">Add to Cart\n            </ion-button>\n          </ion-card>\n        </ion-col> -->\n        <ion-col style=\"padding-left: 10px !important;padding-right: 0 !important;padding-top:0 !important\" sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"6\"  *ngFor=\"let product of productDisplay;index as index\" >\n          <ion-card >\n            <img [src]=\"product.img\" style=\"height: 185px !important\" (click)=\"goToProductDetailPage(product.id)\" />\n            <div style=\" width: 100%;\n            padding-top: 5%;\n            text-align: center;\n            position: absolute;\n            z-index: 99;\n            /* bottom: 31%; */\n            opacity: 0.5;\n            top: 0px;\n            color: white;\n            font-weight: bold;\n            /* background-color: #dc0000; */\n            left: 40%;\n            font-size:20px;\n            \"><ion-icon name=\"heart\" style=\"color:rgb(106, 112, 108)\" (click)=\"wishlist(product.id)\" [ngClass]=\"{wish: product.wish}\"></ion-icon></div>\n            <ion-card-header style=\"padding-top: 0px;padding-bottom: 0;\">\n              <ion-card-title><h6 (click)=\"goToProductDetailPage(product.id)\" style=\"margin-bottom: -10px;\">Full Sleeve Solid Women Jacket</h6></ion-card-title>\n              <ion-card-subtitle >\n                  <ion-row >\n                      <ion-col size=\"4\" style=\"padding-left: 0 !important;\"> \n                       \n                          <ion-badge color=\"success\">4 <ion-icon name=\"star\"></ion-icon></ion-badge>\n    \n                         \n                       </ion-col>\n                       <ion-col size=\"8\" style=\"text-align:right\">\n                        <label style=\"color:black\"><s style=\"color:grey\">$ 28</s> $ {{product.price}}</label>\n                        </ion-col>\n                  </ion-row>\n                </ion-card-subtitle>\n            </ion-card-header>\n            <ion-button expand=\"full\" color=\"dark\" style=\"margin:0\" (click)=\"addToCart(product)\">Add to Cart\n            </ion-button>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n</ion-content>\n<ion-content *ngIf=\"showError\">\n  <div style=\"height: 100%;width:100%;border:solid 1px green;\">\n    <h5>Not Found</h5>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/shop-bycaegorie/shop-bycaegorie-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/shop-bycaegorie/shop-bycaegorie-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ShopBycaegoriePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopBycaegoriePageRoutingModule", function() { return ShopBycaegoriePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shop_bycaegorie_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shop-bycaegorie.page */ "./src/app/pages/shop-bycaegorie/shop-bycaegorie.page.ts");




const routes = [
    {
        path: '',
        component: _shop_bycaegorie_page__WEBPACK_IMPORTED_MODULE_3__["ShopBycaegoriePage"]
    }
];
let ShopBycaegoriePageRoutingModule = class ShopBycaegoriePageRoutingModule {
};
ShopBycaegoriePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ShopBycaegoriePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/shop-bycaegorie/shop-bycaegorie.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/shop-bycaegorie/shop-bycaegorie.module.ts ***!
  \*****************************************************************/
/*! exports provided: ShopBycaegoriePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopBycaegoriePageModule", function() { return ShopBycaegoriePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shop_bycaegorie_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shop-bycaegorie-routing.module */ "./src/app/pages/shop-bycaegorie/shop-bycaegorie-routing.module.ts");
/* harmony import */ var _shop_bycaegorie_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shop-bycaegorie.page */ "./src/app/pages/shop-bycaegorie/shop-bycaegorie.page.ts");







let ShopBycaegoriePageModule = class ShopBycaegoriePageModule {
};
ShopBycaegoriePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shop_bycaegorie_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShopBycaegoriePageRoutingModule"]
        ],
        declarations: [_shop_bycaegorie_page__WEBPACK_IMPORTED_MODULE_6__["ShopBycaegoriePage"]]
    })
], ShopBycaegoriePageModule);



/***/ }),

/***/ "./src/app/pages/shop-bycaegorie/shop-bycaegorie.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/shop-bycaegorie/shop-bycaegorie.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-row ion-col {\n  padding: 10px !important;\n}\nion-row ion-col ion-card {\n  margin: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ViYy0yMS9Eb2N1bWVudHMvaW9uYXBwL2dpdC9uZXdHaXQvbmxmSW9uaWMvc3JjL2FwcC9wYWdlcy9zaG9wLWJ5Y2FlZ29yaWUvc2hvcC1ieWNhZWdvcmllLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2hvcC1ieWNhZWdvcmllL3Nob3AtYnljYWVnb3JpZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSx3QkFBQTtBQ0FOO0FEQ007RUFDRSxzQkFBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2hvcC1ieWNhZWdvcmllL3Nob3AtYnljYWVnb3JpZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tcm93e1xuICAgIGlvbi1jb2x7XG4gICAgICBwYWRkaW5nOjEwcHggIWltcG9ydGFudDtcbiAgICAgIGlvbi1jYXJke1xuICAgICAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfSIsImlvbi1yb3cgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbn1cbmlvbi1yb3cgaW9uLWNvbCBpb24tY2FyZCB7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/shop-bycaegorie/shop-bycaegorie.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/shop-bycaegorie/shop-bycaegorie.page.ts ***!
  \***************************************************************/
/*! exports provided: ShopBycaegoriePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopBycaegoriePage", function() { return ShopBycaegoriePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tsFiles_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tsFiles/products */ "./src/app/tsFiles/products.ts");




let ShopBycaegoriePage = class ShopBycaegoriePage {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.products = _tsFiles_products__WEBPACK_IMPORTED_MODULE_3__["products"].jackets;
        this.productDisplay = [];
        this.showError = false;
        this.route.queryParams.subscribe(params => {
            if (params && params.special) {
                this.data = JSON.parse(params.special);
            }
        });
        console.log("this.data", this.data);
        _tsFiles_products__WEBPACK_IMPORTED_MODULE_3__["products"].jackets.map((item) => {
            // if(this.data === item.womenJackets){
            // this.productDisplay.push(item);
            console.log("this.productDisplay", item.jacketType);
            // }
        });
    }
    ngOnInit() {
        _tsFiles_products__WEBPACK_IMPORTED_MODULE_3__["products"].jackets.map((item) => {
            if (this.data.type === item.jacketType) {
                this.productDisplay.push(item);
                console.log("this.productDisplay", item.jacketType);
            }
        });
        console.log("this.data", this.data);
        if (this.productDisplay.length === 0) {
            this.showError = true;
        }
        else {
            this.showError = false;
        }
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
    addToCart(data) {
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
    }
};
ShopBycaegoriePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ShopBycaegoriePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shop-bycaegorie',
        template: __webpack_require__(/*! raw-loader!./shop-bycaegorie.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/shop-bycaegorie/shop-bycaegorie.page.html"),
        styles: [__webpack_require__(/*! ./shop-bycaegorie.page.scss */ "./src/app/pages/shop-bycaegorie/shop-bycaegorie.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ShopBycaegoriePage);



/***/ })

}]);
//# sourceMappingURL=pages-shop-bycaegorie-shop-bycaegorie-module-es2015.js.map