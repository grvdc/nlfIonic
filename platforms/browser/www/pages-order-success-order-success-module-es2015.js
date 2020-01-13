(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-success-order-success-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/order-success/order-success.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/order-success/order-success.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>order-success</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content> -->\n<div style=\"width: 100%;height: 100%;background: #de6161;display: flex;justify-content: center;\nalign-items: center;flex-direction:column;\" class=\"white\">\n  <!-- <img src=\"https://png.pngtree.com/svg/20170421/successful_icon_405296.png\" style=\"width: 50%;\"> -->\n  <!-- <ion-icon name=\"checkmark\"></ion-icon> -->\n  <ion-icon name=\"checkmark-circle\" style=\"font-size:200px\"></ion-icon>\n<h2>Hurray</h2>\n<h4>Order placed Successfully.</h4>\n</div>"

/***/ }),

/***/ "./src/app/pages/order-success/order-success-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/order-success/order-success-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: OrderSuccessPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSuccessPageRoutingModule", function() { return OrderSuccessPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _order_success_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-success.page */ "./src/app/pages/order-success/order-success.page.ts");




const routes = [
    {
        path: '',
        component: _order_success_page__WEBPACK_IMPORTED_MODULE_3__["OrderSuccessPage"]
    }
];
let OrderSuccessPageRoutingModule = class OrderSuccessPageRoutingModule {
};
OrderSuccessPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderSuccessPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/order-success/order-success.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/order-success/order-success.module.ts ***!
  \*************************************************************/
/*! exports provided: OrderSuccessPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSuccessPageModule", function() { return OrderSuccessPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _order_success_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-success-routing.module */ "./src/app/pages/order-success/order-success-routing.module.ts");
/* harmony import */ var _order_success_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-success.page */ "./src/app/pages/order-success/order-success.page.ts");







let OrderSuccessPageModule = class OrderSuccessPageModule {
};
OrderSuccessPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _order_success_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderSuccessPageRoutingModule"]
        ],
        declarations: [_order_success_page__WEBPACK_IMPORTED_MODULE_6__["OrderSuccessPage"]]
    })
], OrderSuccessPageModule);



/***/ }),

/***/ "./src/app/pages/order-success/order-success.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/order-success/order-success.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyLXN1Y2Nlc3Mvb3JkZXItc3VjY2Vzcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/order-success/order-success.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/order-success/order-success.page.ts ***!
  \***********************************************************/
/*! exports provided: OrderSuccessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSuccessPage", function() { return OrderSuccessPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let OrderSuccessPage = class OrderSuccessPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        setTimeout(() => {
            this.router.navigate(['home']);
        }, 3000);
    }
};
OrderSuccessPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
OrderSuccessPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-success',
        template: __webpack_require__(/*! raw-loader!./order-success.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/order-success/order-success.page.html"),
        styles: [__webpack_require__(/*! ./order-success.page.scss */ "./src/app/pages/order-success/order-success.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], OrderSuccessPage);



/***/ })

}]);
//# sourceMappingURL=pages-order-success-order-success-module-es2015.js.map