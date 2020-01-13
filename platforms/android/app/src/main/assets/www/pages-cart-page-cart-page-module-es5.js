(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cart-page-cart-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cart-page/cart-page.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cart-page/cart-page.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"bg-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"white\"></ion-back-button>\n      <!-- <ion-menu-button class=\"white\"></ion-menu-button> -->\n    </ion-buttons>\n    <ion-title>Cart</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"cartItems.length\">\n  <div *ngIf=\"skeleton\">\n    <ion-item>\n      <ion-thumbnail slot=\"start\" style=\"width: 35%;height:125px;\">\n        <ion-skeleton-text></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 70%;height:25px\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail slot=\"start\" style=\"width: 35%;height:125px;\">\n        <ion-skeleton-text></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 70%;height:25px\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail slot=\"start\" style=\"width: 35%;height:125px;\">\n        <ion-skeleton-text></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 70%;height:25px\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n  </div>\n\n  <div style=\"height:80%;overflow: scroll;\" *ngIf=\"!skeleton\">\n    <ion-list>\n      <ion-card *ngFor=\"let item of cartItems; index as index\">\n        <ion-item lines=\"none\"  slot=\"start\" class=\"tt\" no-padding>\n          <ion-thumbnail slot=\"start\" style=\"width:30%;height: 0%;margin:0\" (click)=\"goToProductDetailPage(item.id)\">\n            <img [src]=\"item.img\">\n          </ion-thumbnail>\n          <div style=\"padding-left: 10px;height: 100%;display: grid;width:100%\">\n\n            <ion-card-subtitle style=\"text-align: left;margin:0;display: flex; align-items: center\">\n              <h5 style=\"text-align: left;margin:0;margin-bottom: -28%;\">Avatar Start, Button Item</h5>\n            \n            </ion-card-subtitle>\n            <ion-row>\n              <ion-col style=\"display: flex;  align-self: flex-end;margin-bottom: -20%;\">\n                <p >\n                  <label>$ {{item.price}}</label>\n                  <label style=\"margin-left: 15px;\">in stock</label>\n                </p>\n\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col style=\"display: flex;\n              align-self: flex-end;\">\n                <ion-icon name=\"remove\" (click)=\"removeQty(item,index)\"></ion-icon>\n                <ion-label style=\"align-self: center\">{{item.productQuantity>-1?item.productQuantity:1}}</ion-label>\n                <ion-icon name=\"add\" (click)=\"addQty(item,index)\"></ion-icon>\n\n              </ion-col>\n              <ion-col size=\"5\" style=\"align-self: flex-end;display :flex;font-size:18pt;justify-content: flex-end;padding-right: 0;\">\n                  <!-- <ion-icon name=\"heart\" style=\"color:rgb(106, 112, 108)\" (click)=\"wishlist(item,index)\" [ngClass]=\"{wish: item.wish}\"></ion-icon> -->\n                  <!-- <ion-icon name=\"trash\" (click)=\"indexFinding(index)\" style=\"color:red\"></ion-icon> -->\n              </ion-col>\n            </ion-row>\n\n          </div>\n        </ion-item>\n        <div style=\"     width: 100%;\n        padding-top: 10px;\n        text-align: center;\n        position: absolute;\n        z-index: 99;\n        /* bottom: 31%; */\n        opacity: 0.5;\n        top: 0;\n        color: white;\n        font-weight: bold;\n        /* background-color: #dc0000; */\n        font-size: 23px;\n        /* left: 39%; */\n        text-align: right;\n        padding-right: 10px;\n        \"><ion-icon name=\"heart\" style=\"color:rgb(106, 112, 108)\" (click)=\"wishlist(item,index)\" [ngClass]=\"{wish: item.wish}\"></ion-icon></div>\n\n<div style=\"     width: 100%;\npadding-top: 10px;\ntext-align: center;\nposition: absolute;\nz-index: 99;\n\ncolor: white;\nfont-weight: bold;\n\nfont-size: 18pt;\n\ntext-align: right;\npadding-right: 10px;\nbottom: 0;\n    padding-bottom: 10px\"><ion-icon name=\"trash\" style=\"color:red\" (click)=\"indexFinding(index)\"  ></ion-icon></div>\n      </ion-card>\n    </ion-list>\n  </div>\n  <ion-card style=\" padding: 0px;\n    margin:0;\n     position: absolute;\n     bottom: 0;\n     width: 100%;\n     \n     \" *ngIf=\"!skeleton\">\n    \n    <ion-item lines=\"none\"  slot=\"start\">\n      <ion-icon name=\"cash\" slot=\"start\"></ion-icon>\n      <ion-label>\n        <h3>Total Amount</h3>\n      </ion-label>\n      <ion-label>\n        <h4>$ {{totalAmount}}</h4>\n      </ion-label>\n\n    </ion-item>\n\n\n    <ion-card-content>\n      <ion-button   fill=\"outline\" class=\"checkout-btn\" type=\"submit\" (click)=\"checkOutPage()\">Proceed To checkout\n      </ion-button>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n\n<ion-content *ngIf=\"!cartItems.length\">\n  <ion-text>Nothing in cart</ion-text>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/cart-page/cart-page-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/cart-page/cart-page-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CartPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPagePageRoutingModule", function() { return CartPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cart_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart-page.page */ "./src/app/pages/cart-page/cart-page.page.ts");




var routes = [
    {
        path: '',
        component: _cart_page_page__WEBPACK_IMPORTED_MODULE_3__["CartPagePage"]
    }
];
var CartPagePageRoutingModule = /** @class */ (function () {
    function CartPagePageRoutingModule() {
    }
    CartPagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CartPagePageRoutingModule);
    return CartPagePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/cart-page/cart-page.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/cart-page/cart-page.module.ts ***!
  \*****************************************************/
/*! exports provided: CartPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPagePageModule", function() { return CartPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cart_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart-page-routing.module */ "./src/app/pages/cart-page/cart-page-routing.module.ts");
/* harmony import */ var _cart_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart-page.page */ "./src/app/pages/cart-page/cart-page.page.ts");
/* harmony import */ var ionic4_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic4-rating */ "./node_modules/ionic4-rating/dist/index.js");








var CartPagePageModule = /** @class */ (function () {
    function CartPagePageModule() {
    }
    CartPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                ionic4_rating__WEBPACK_IMPORTED_MODULE_7__["IonicRatingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _cart_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartPagePageRoutingModule"]
            ],
            declarations: [_cart_page_page__WEBPACK_IMPORTED_MODULE_6__["CartPagePage"]]
        })
    ], CartPagePageModule);
    return CartPagePageModule;
}());



/***/ }),

/***/ "./src/app/pages/cart-page/cart-page.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/cart-page/cart-page.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  padding: 5pt;\n  background-color: rgba(0, 150, 0, 0.8);\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0;\n}\n\n.tt {\n  padding: 10px;\n}\n\n.item-inner {\n  padding-right: 0px !important;\n}\n\n.checkout-btn {\n  --color:#de6161;\n  --border-color: #de6161;\n  width: 100%;\n  --color-activated: #de6161;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ViYy0yMS9Eb2N1bWVudHMvaW9uYXBwL2dpdC9uZXdHaXQvbmxmSW9uaWMvc3JjL2FwcC9wYWdlcy9jYXJ0LXBhZ2UvY2FydC1wYWdlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2FydC1wYWdlL2NhcnQtcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxZQUFBO0VBQ0Esc0NBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsU0FBQTtBQ0FSOztBREVBO0VBQ1EsYUFBQTtBQ0NSOztBRENBO0VBQ1EsNkJBQUE7QUNFUjs7QURBQTtFQUNRLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQ0dSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FydC1wYWdlL2NhcnQtcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVye1xuICAgIFxuICAgICAgICBwYWRkaW5nOiA1cHQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTUwLCAwLCAuOCk7XG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgIGJvdHRvbTogMDtcbn1cbi50dCB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG59XG4uaXRlbS1pbm5lciB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweCFpbXBvcnRhbnQ7XG4gICAgIH1cbi5jaGVja291dC1idG57XG4gICAgICAgIC0tY29sb3I6I2RlNjE2MTtcbiAgICAgICAgLS1ib3JkZXItY29sb3I6ICNkZTYxNjE7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjZGU2MTYxO1xufSIsIi5mb290ZXIge1xuICBwYWRkaW5nOiA1cHQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTUwLCAwLCAwLjgpO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBib3R0b206IDA7XG59XG5cbi50dCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5pdGVtLWlubmVyIHtcbiAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jaGVja291dC1idG4ge1xuICAtLWNvbG9yOiNkZTYxNjE7XG4gIC0tYm9yZGVyLWNvbG9yOiAjZGU2MTYxO1xuICB3aWR0aDogMTAwJTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNkZTYxNjE7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/cart-page/cart-page.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/cart-page/cart-page.page.ts ***!
  \***************************************************/
/*! exports provided: CartPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPagePage", function() { return CartPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CartPagePage = /** @class */ (function () {
    function CartPagePage(router) {
        this.router = router;
        this.cartItems = [];
        this.rate = 4;
        this.skeleton = true;
        this.cartCount = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CartPagePage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.skeleton = false;
        }, 3000);
        var a = [];
        if (!JSON.parse(localStorage.getItem('products'))) {
        }
        else {
            this.totalAmount = 0;
            a = JSON.parse(localStorage.getItem('products'));
            a.map(function (item) {
                item.productQuantity = 1;
                _this.totalAmount = _this.totalAmount + item.price;
            });
            console.log('adata', a);
        }
        localStorage.setItem('products', JSON.stringify(a));
        this.cartItems = a;
        console.log('cartItems', this.cartItems);
    };
    CartPagePage.prototype.indexFinding = function (index) {
        var _this = this;
        this.totalAmount = 0;
        this.cartItems.splice(index, 1);
        this.cartCount.emit(this.cartItems.length);
        this.cartItems.map(function (item) {
            var newamt = 0;
            item.productQuantity ? newamt = item.productQuantity * item.price : _this.totalAmount + item.price;
            _this.totalAmount = _this.totalAmount + newamt;
        });
        localStorage.setItem('products', JSON.stringify(this.cartItems));
    };
    CartPagePage.prototype.addQty = function (item, index) {
        var _this = this;
        console.log(" this.cartItems[index]", this.cartItems[index]);
        item.productQuantity ? item.productQuantity = item.productQuantity + 1 : item.productQuantity = 1;
        this.cartItems[index]['productQuantity'] = item.productQuantity;
        this.totalAmount = 0;
        this.cartItems.map(function (item) {
            var newamt = 0;
            item.productQuantity ? newamt = item.productQuantity * item.price : _this.totalAmount + item.price;
            _this.totalAmount = _this.totalAmount + newamt;
        });
    };
    CartPagePage.prototype.removeQty = function (item, index) {
        var _this = this;
        console.log(" this.cartItems[index]", this.cartItems[index]);
        item.productQuantity ? item.productQuantity = item.productQuantity - 1 : item.productQuantity = 0;
        this.cartItems[index]['productQuantity'] = item.productQuantity;
        this.totalAmount = 0;
        this.cartItems.map(function (item) {
            var newamt = 0;
            item.productQuantity ? newamt = item.productQuantity * item.price : _this.totalAmount + item.price;
            _this.totalAmount = _this.totalAmount + newamt;
        });
    };
    CartPagePage.prototype.wishlist = function (item, index) {
        console.log(" this.cartItems[index]", this.cartItems[index]);
        item.wish ? item.wish = !item.wish : item.wish = true;
        this.cartItems[index]['wish'] = item.wish;
        localStorage.setItem('products', JSON.stringify(this.cartItems));
    };
    CartPagePage.prototype.checkOutPage = function () {
        localStorage.removeItem("singleItem");
        this.router.navigateByUrl('/address-screen');
    };
    CartPagePage.prototype.test = function () {
        console.log("tetsingClick");
    };
    CartPagePage.prototype.goToProductDetailPage = function (id) {
        console.log('datatttt', id);
        var navigationExtras = {
            queryParams: {
                special: JSON.stringify(id),
                fromCart: true,
            }
        };
        this.router.navigate(['product-detail-page'], navigationExtras);
    };
    CartPagePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], CartPagePage.prototype, "cartCount", void 0);
    CartPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart-page',
            template: __webpack_require__(/*! raw-loader!./cart-page.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cart-page/cart-page.page.html"),
            styles: [__webpack_require__(/*! ./cart-page.page.scss */ "./src/app/pages/cart-page/cart-page.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CartPagePage);
    return CartPagePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cart-page-cart-page-module-es5.js.map