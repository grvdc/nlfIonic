(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-shop-bycaegorie-shop-bycaegorie-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/shop-bycaegorie/shop-bycaegorie.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/shop-bycaegorie/shop-bycaegorie.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>shopBycaegorie</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-row>\n        <ion-col size=\"6\" *ngFor=\"let product of productDisplay;\" style=\"padding:10px\">\n          <ion-card style=\"margin: 0px;\">\n            <img [src]=\"product.img\" style=\"height: 185px !important\" />\n            <ion-card-header style=\"padding-top: 0px;\">\n              <ion-card-title><h5>Full Sleeve Solid Women Jacket</h5></ion-card-title>\n              <ion-card-subtitle style=\"text-align: center;\">\n                        $ {{product.price}} \n                </ion-card-subtitle>\n            </ion-card-header>\n            <ion-card-content style=\"text-align: center;\">\n                Some text about the jeans....\n            </ion-card-content>\n            <ion-button expand=\"full\" color=\"dark\" (click)=\"addToCart(product)\">Add to Cart\n            </ion-button>\n          </ion-card>\n        </ion-col>\n    \n      </ion-row>\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shop_bycaegorie_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shop-bycaegorie.page */ "./src/app/pages/shop-bycaegorie/shop-bycaegorie.page.ts");




var routes = [
    {
        path: '',
        component: _shop_bycaegorie_page__WEBPACK_IMPORTED_MODULE_3__["ShopBycaegoriePage"]
    }
];
var ShopBycaegoriePageRoutingModule = /** @class */ (function () {
    function ShopBycaegoriePageRoutingModule() {
    }
    ShopBycaegoriePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ShopBycaegoriePageRoutingModule);
    return ShopBycaegoriePageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shop_bycaegorie_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shop-bycaegorie-routing.module */ "./src/app/pages/shop-bycaegorie/shop-bycaegorie-routing.module.ts");
/* harmony import */ var _shop_bycaegorie_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shop-bycaegorie.page */ "./src/app/pages/shop-bycaegorie/shop-bycaegorie.page.ts");







var ShopBycaegoriePageModule = /** @class */ (function () {
    function ShopBycaegoriePageModule() {
    }
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
    return ShopBycaegoriePageModule;
}());



/***/ }),

/***/ "./src/app/pages/shop-bycaegorie/shop-bycaegorie.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/shop-bycaegorie/shop-bycaegorie.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nob3AtYnljYWVnb3JpZS9zaG9wLWJ5Y2FlZ29yaWUucGFnZS5zY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tsFiles_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tsFiles/products */ "./src/app/tsFiles/products.ts");




var ShopBycaegoriePage = /** @class */ (function () {
    function ShopBycaegoriePage(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.products = _tsFiles_products__WEBPACK_IMPORTED_MODULE_3__["products"].jackets;
        this.productDisplay = [];
        this.route.queryParams.subscribe(function (params) {
            if (params && params.special) {
                _this.data = JSON.parse(params.special);
            }
        });
        console.log("this.data", this.data);
        _tsFiles_products__WEBPACK_IMPORTED_MODULE_3__["products"].jackets.map(function (item) {
            // if(this.data === item.womenJackets){
            // this.productDisplay.push(item);
            console.log("this.productDisplay", item.womenJackets);
            // }
        });
    }
    ShopBycaegoriePage.prototype.ngOnInit = function () {
        var _this = this;
        _tsFiles_products__WEBPACK_IMPORTED_MODULE_3__["products"].jackets.map(function (item) {
            if (_this.data === item.womenJackets) {
                _this.productDisplay.push(item);
                console.log("this.productDisplay", item.womenJackets);
            }
        });
        console.log("this.data", this.data);
    };
    ShopBycaegoriePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ShopBycaegoriePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shop-bycaegorie',
            template: __webpack_require__(/*! raw-loader!./shop-bycaegorie.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/shop-bycaegorie/shop-bycaegorie.page.html"),
            styles: [__webpack_require__(/*! ./shop-bycaegorie.page.scss */ "./src/app/pages/shop-bycaegorie/shop-bycaegorie.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ShopBycaegoriePage);
    return ShopBycaegoriePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-shop-bycaegorie-shop-bycaegorie-module-es5.js.map