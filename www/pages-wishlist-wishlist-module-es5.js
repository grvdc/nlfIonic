(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-wishlist-wishlist-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/wishlist/wishlist.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/wishlist/wishlist.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"bg-color\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button class=\"white\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>wishlist</ion-title>\n    <!-- <ion-searchbar  [(ngModel)]=\"searchTerm\"\n    (ionChange)=\"setFilteredItems()\"></ion-searchbar> -->\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ng-container *ngFor=\"let item of testData; index as index\">\n      <ion-item>\n          <label>{{item.category}}</label>\n       </ion-item>\n       <ion-card *ngFor=\"let newitem of item.categoryList;\">\n          <ion-item  no-padding >\n              <ion-thumbnail slot=\"start\" style=\"width:35%;height: 0%;margin:0\">\n                  <img [src]=\"newitem.image\">\n                </ion-thumbnail>\n              <label>{{newitem.name}}</label>\n          </ion-item>\n        </ion-card>\n  </ng-container> -->\n  <ng-container *ngFor=\"let item of products; index as index\">\n  <ion-card  >\n    \n    <ion-item slot=\"start\" class=\"tt\" lines=\"none\" no-padding >\n      <ion-thumbnail slot=\"start\" style=\"width:35%;height: 0%;margin:0\">\n        <img [src]=\"item.img\">\n      </ion-thumbnail>\n      <div style=\"padding-left: 10px;height: 100%;display: grid;width:100%\">\n\n        <ion-card-subtitle style=\"text-align: left;margin:0;display: flex; align-items: center\">\n          <h5 style=\"text-align: left;margin:0\">Avatar Start, Button Item</h5>\n        \n        </ion-card-subtitle>\n        <ion-row>\n          <ion-col style=\"margin-bottom: -20%;\">\n            <p >\n              <label>$ {{item.price}}</label>\n            </p>\n\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"3\"  style=\"display: flex;\n          align-self: flex-end; font-size: 15pt;justify-content: space-around;\">\n            <!-- <ion-icon name=\"remove\" (click)=\"removeQty(item,index)\"></ion-icon>\n            <ion-label style=\"align-self: center\">{{item.productQuantity>-1?item.productQuantity:1}}</ion-label> -->\n            <!-- <ion-icon name=\"add\" (click)=\"addQty(item,index)\"></ion-icon> -->\n            <!-- <label>$ {{item.price}}</label> -->\n              <!-- <ion-icon name=\"trash\" (click)=\"indexFinding(index)\" style=\"color:red\"></ion-icon> -->\n\n            <ion-button color=\"primary\" size=\"small\" fill=\"clear\" (click)=\"wishlist(item.id)\">\n                <ion-icon name=\"trash\"  style=\"color:red\"></ion-icon>\n            </ion-button>\n\n          </ion-col>\n        \n          <ion-col size=\"9\" style=\"align-self: flex-end;display :flex;font-size:18pt;justify-content: space-around;\">\n              <!-- <ion-icon name=\"heart\" style=\"color:rgb(106, 112, 108)\" (click)=\"wishlist(item,index)\" [ngClass]=\"{wish: item.wish}\"></ion-icon> -->\n              <!-- <ion-icon name=\"trash\" (click)=\"indexFinding(index)\" style=\"color:red\"></ion-icon> -->\n              <ion-button color=\"tertiary\"  size=\"small\" (click)=\"addToCart(item)\">Add To cart</ion-button>\n<!-- <ion-button color=\"secondary\">Secondary</ion-button> -->\n          </ion-col>\n        </ion-row>\n\n      </div>\n    </ion-item>\n  \n  </ion-card>\n</ng-container>\n\n<ng-container *ngIf=\"products.length == 0\">\n  <h5>Nothing in Wishlist</h5>\n</ng-container>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/wishlist/wishlist-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/wishlist/wishlist-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: WishlistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistPageRoutingModule", function() { return WishlistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _wishlist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wishlist.page */ "./src/app/pages/wishlist/wishlist.page.ts");




var routes = [
    {
        path: '',
        component: _wishlist_page__WEBPACK_IMPORTED_MODULE_3__["WishlistPage"]
    }
];
var WishlistPageRoutingModule = /** @class */ (function () {
    function WishlistPageRoutingModule() {
    }
    WishlistPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], WishlistPageRoutingModule);
    return WishlistPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/wishlist/wishlist.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/wishlist/wishlist.module.ts ***!
  \***************************************************/
/*! exports provided: WishlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistPageModule", function() { return WishlistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _wishlist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wishlist-routing.module */ "./src/app/pages/wishlist/wishlist-routing.module.ts");
/* harmony import */ var _wishlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wishlist.page */ "./src/app/pages/wishlist/wishlist.page.ts");







var WishlistPageModule = /** @class */ (function () {
    function WishlistPageModule() {
    }
    WishlistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _wishlist_routing_module__WEBPACK_IMPORTED_MODULE_5__["WishlistPageRoutingModule"]
            ],
            declarations: [_wishlist_page__WEBPACK_IMPORTED_MODULE_6__["WishlistPage"]]
        })
    ], WishlistPageModule);
    return WishlistPageModule;
}());



/***/ }),

/***/ "./src/app/pages/wishlist/wishlist.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/wishlist/wishlist.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tt {\n  padding: 10px;\n}\n\nion-item .item-inner .item-inner {\n  padding: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ViYy0yMS9Eb2N1bWVudHMvaW9uYXBwL2dpdC9uZXdHaXQvbmxmSW9uaWMvc3JjL2FwcC9wYWdlcy93aXNobGlzdC93aXNobGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3dpc2hsaXN0L3dpc2hsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURHUTtFQUNJLHFCQUFBO0FDQVoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy93aXNobGlzdC93aXNobGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5pb24taXRlbXtcbiAgICAuaXRlbS1pbm5lcntcbiAgICAgICAgLml0ZW0taW5uZXJ7XG4gICAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLnR0IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaW9uLWl0ZW0gLml0ZW0taW5uZXIgLml0ZW0taW5uZXIge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/wishlist/wishlist.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/wishlist/wishlist.page.ts ***!
  \*************************************************/
/*! exports provided: WishlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistPage", function() { return WishlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tsFiles_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tsFiles/products */ "./src/app/tsFiles/products.ts");



var WishlistPage = /** @class */ (function () {
    function WishlistPage() {
        this.products = [];
        this.testData = [
            {
                category: 'Event',
                categoryList: [{
                        name: 'Gaurav',
                        image: 'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg',
                    },
                    {
                        name: 'MahiPal',
                        image: 'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg',
                    },]
            },
            {
                category: 'Sports',
                categoryList: [{
                        name: 'Seema',
                        image: 'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg',
                    },
                    {
                        name: 'Rahul',
                        image: 'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg',
                    }]
            }
        ];
        this.searchTerm = "";
    }
    WishlistPage.prototype.ngOnInit = function () {
        var _this = this;
        _tsFiles_products__WEBPACK_IMPORTED_MODULE_2__["products"].jackets.map(function (item) {
            if (item['wish']) {
                _this.products.push(item);
            }
        });
    };
    WishlistPage.prototype.setFilteredItems = function () {
        console.log("search string", this.searchTerm);
        // let data:any;
        // data = this.testData.filter(item => {
        //    return item.category.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
        //   });
        //   console.log("data",data);
        //   this.testData = data;
        //   console.log("search string", this.testData);
    };
    WishlistPage.prototype.addToCart = function (data) {
        var a = [];
        if (!JSON.parse(localStorage.getItem('products'))) {
            a.push(data);
        }
        else {
            a = JSON.parse(localStorage.getItem('products'));
            a.push(data);
        }
        console.log('a', a);
        localStorage.setItem('products', JSON.stringify(a));
    };
    WishlistPage.prototype.wishlist = function (id) {
        _tsFiles_products__WEBPACK_IMPORTED_MODULE_2__["products"].jackets.map(function (item) {
            if (item.id == id) {
                item['wish'] ? item['wish'] = !item['wish'] : item['wish'] = true;
            }
        });
        this.products = this.products.filter(function (item) { return item.id !== id; });
    };
    WishlistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wishlist',
            template: __webpack_require__(/*! raw-loader!./wishlist.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/wishlist/wishlist.page.html"),
            styles: [__webpack_require__(/*! ./wishlist.page.scss */ "./src/app/pages/wishlist/wishlist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WishlistPage);
    return WishlistPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-wishlist-wishlist-module-es5.js.map