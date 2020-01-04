(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-all-address-all-address-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/all-address/all-address.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/all-address/all-address.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"bg-color\">\n    <ion-title>all-address</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ng-container *ngIf=\"clientAddress.length > 0\">\n      <ion-card *ngFor=\"let item of clientAddress;index as index\">\n          <ion-item>\n      \n            <ion-label class=\"ion-text-wrap\">\n              <ion-text>\n                <h2><b>{{item.name}}</b></h2>\n              </ion-text>\n              <ion-text>\n                <h3>{{item.address}}, {{item.landmark}} , {{item.city}}, {{item.state}} <b>- {{item.zip}}</b></h3>\n              </ion-text>\n              <ion-text>\n                <h3>{{item.mobile}}</h3>\n              </ion-text>\n              <ion-button (click)=\"sendBacktoInvoice(item)\">Select</ion-button>\n              <ion-button (click)=\"remove(index)\">Remove</ion-button>\n            </ion-label>\n          </ion-item>\n        </ion-card>\n        <ion-card >\n          <ion-item>\n            <ion-text>\n              <h5>Add New Address</h5>\n            </ion-text>\n          </ion-item>\n          <ion-item>\n              \n              <ion-button (click)=\"addAddress()\">Add New Address</ion-button>\n            </ion-item>\n        </ion-card>\n  </ng-container>\n  <ng-container  *ngIf=\"clientAddress.length == 0\">\n      <ion-card >\n          <ion-item>\n            <ion-text>\n              <h5>No Address found</h5>\n            </ion-text>\n          </ion-item>\n          <ion-item>\n              \n              <ion-button (click)=\"addAddress()\">Add Address</ion-button>\n            </ion-item>\n        </ion-card>\n  </ng-container>\n \n</ion-content>"

/***/ }),

/***/ "./src/app/pages/all-address/all-address-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/all-address/all-address-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AllAddressPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllAddressPageRoutingModule", function() { return AllAddressPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _all_address_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-address.page */ "./src/app/pages/all-address/all-address.page.ts");




const routes = [
    {
        path: '',
        component: _all_address_page__WEBPACK_IMPORTED_MODULE_3__["AllAddressPage"]
    }
];
let AllAddressPageRoutingModule = class AllAddressPageRoutingModule {
};
AllAddressPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AllAddressPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/all-address/all-address.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/all-address/all-address.module.ts ***!
  \*********************************************************/
/*! exports provided: AllAddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllAddressPageModule", function() { return AllAddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _all_address_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./all-address-routing.module */ "./src/app/pages/all-address/all-address-routing.module.ts");
/* harmony import */ var _all_address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all-address.page */ "./src/app/pages/all-address/all-address.page.ts");







let AllAddressPageModule = class AllAddressPageModule {
};
AllAddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _all_address_routing_module__WEBPACK_IMPORTED_MODULE_5__["AllAddressPageRoutingModule"]
        ],
        declarations: [_all_address_page__WEBPACK_IMPORTED_MODULE_6__["AllAddressPage"]]
    })
], AllAddressPageModule);



/***/ }),

/***/ "./src/app/pages/all-address/all-address.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/all-address/all-address.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FsbC1hZGRyZXNzL2FsbC1hZGRyZXNzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/all-address/all-address.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/all-address/all-address.page.ts ***!
  \*******************************************************/
/*! exports provided: AllAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllAddressPage", function() { return AllAddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AllAddressPage = class AllAddressPage {
    constructor(router) {
        this.router = router;
        this.login = '';
        this.address = [];
        this.clientAddress = [];
        this.aa = [];
        this.login = localStorage.getItem("login");
        this.address = JSON.parse(localStorage.getItem('address'));
        this.address.filter((item) => {
            if (item.email == this.login) {
                this.clientAddress = item.address;
                // console.log("Address", item);
            }
        });
        console.log('cleintaddress', this.clientAddress);
    }
    ngOnInit() {
    }
    sendBacktoInvoice(data) {
        console.log('selected Address', data);
        let navigationExtras = {
            queryParams: {
                special: JSON.stringify(data)
            }
        };
        this.router.navigate(['invoice-page'], navigationExtras);
    }
    addAddress() {
        this.router.navigate(['address-screen']);
    }
    remove(index) {
        this.clientAddress.splice(index, 1);
        this.address.filter((item) => {
            if (item.email == this.login) {
                item.address = this.clientAddress;
                // console.log("Address", item);
            }
        });
        localStorage.setItem('address', JSON.stringify(this.address));
    }
};
AllAddressPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AllAddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-all-address',
        template: __webpack_require__(/*! raw-loader!./all-address.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/all-address/all-address.page.html"),
        styles: [__webpack_require__(/*! ./all-address.page.scss */ "./src/app/pages/all-address/all-address.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AllAddressPage);



/***/ })

}]);
//# sourceMappingURL=pages-all-address-all-address-module-es2015.js.map