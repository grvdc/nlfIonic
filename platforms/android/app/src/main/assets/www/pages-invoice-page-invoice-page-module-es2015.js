(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-invoice-page-invoice-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/invoice-page/invoice-page.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/invoice-page/invoice-page.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"bg-color\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button class=\"white\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>Invoice</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-item >\n      <ion-row style=\"width:100%\">\n        <ion-col size=\"6\">\n          Product\n        </ion-col>\n        <ion-col size=\"3\" style=\"text-align: center;\">\n          Qty.\n        </ion-col>\n        <ion-col size=\"3\" style=\"text-align: right;\">\n          Price\n        </ion-col>\n      </ion-row>\n\n    </ion-item>\n    <ion-item *ngFor=\"let item of cartItems\">\n        <ion-avatar slot=\"start\">\n            <img [src]=\"item.img\">\n          </ion-avatar>\n      <ion-row style=\"width:100%\">\n        <ion-col size=\"6\" >\n          {{item.title}}\n        </ion-col>\n        <ion-col size=\"3\" >\n          1\n        </ion-col>\n        <ion-col size=\"3\" style=\"text-align: right;\">\n          {{item.price}}\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n        <ion-row style=\"width:100%\">\n            <ion-col size=\"6\" >\n              Total\n            </ion-col>\n            <ion-col size=\"3\" style=\"text-align: center;\">\n              3\n            </ion-col>\n            <ion-col size=\"3\" style=\"text-align: right;\">\n              75\n            </ion-col>\n          </ion-row>\n    </ion-item>\n  </ion-card>\n  <ion-card >\n      <ion-item *ngIf=\"data\">\n        <ion-label class=\"ion-text-wrap\" >\n            <ion-text>\n              <h2><b>{{data.name?data.name:'' }}</b></h2>\n            </ion-text>\n            <ion-text>\n              <h3>{{data.address?data.address : ''}}, {{data.landmark ? data.landmark : ''}} , {{data.city ? data.city : ''}}, {{data.state ?data.state : ''}} <b>- {{data.zip ? data.zip : ''}}</b></h3>\n            </ion-text>\n            <ion-text>\n              <h3>{{data.mobile ? data.mobile : ''}}</h3>\n            </ion-text>\n            <ion-button (click)=\"chengeAddress()\">Change Address</ion-button>\n          </ion-label>\n      </ion-item>\n      <ion-item *ngIf=\"!data\">\n        <ion-button (click)=\"chengeAddress()\">Add Address</ion-button>\n      </ion-item>\n    </ion-card>\n\n  <ion-card>\n      <ion-item>\n          <ion-text>\n            <h6>Payment Via</h6>\n          </ion-text>\n          \n      </ion-item>\n      <ion-item>\n          <ion-button expand=\"block\" [fill]=\"card ? 'solid' : 'outline'\" (click)=\"viaCard()\">Card</ion-button>\n          <ion-button expand=\"block\" [fill]=\"cod ? 'solid' : 'outline'\" (click)=\"cashOnDelivery()\" >C.O.D</ion-button>\n      </ion-item>\n      <ion-item *ngIf=\"cod\">\n        <ion-button expand=\"block\" fill=\"outline\" style=\"width:100%\" (click)=\"goToHome()\">Continue C.O.D $75</ion-button>\n    </ion-item>\n    </ion-card>\n\n    <ion-card *ngIf=\"card\">\n        <ion-item>\n            <ion-text>\n              <h6>Credit/Debit/ATM card</h6>\n            </ion-text>\n        </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\">Enter card No.</ion-label>\n                <ion-input name=\"card\" ></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\">Valid thru</ion-label>\n                <ion-row style=\"width:100%\">\n                    <ion-col size=\"6\" >\n                        <ion-select style=\"padding:0\">\n                            <ion-select-option value=\"01\">January</ion-select-option>\n                            <ion-select-option value=\"02\">February</ion-select-option>\n                            <ion-select-option value=\"03\">March</ion-select-option>\n                            <ion-select-option value=\"04\">April</ion-select-option>\n                            <ion-select-option value=\"05\">May</ion-select-option>\n                            <ion-select-option value=\"06\">June</ion-select-option>\n                            <ion-select-option value=\"07\">July</ion-select-option>\n                            <ion-select-option value=\"08\">August</ion-select-option>\n                            <ion-select-option value=\"09\">September</ion-select-option>\n                            <ion-select-option value=\"10\">October</ion-select-option>\n                            <ion-select-option value=\"11\">November</ion-select-option>\n                            <ion-select-option value=\"12\" >December</ion-select-option>\n                          </ion-select>\n                    </ion-col>\n                    <ion-col size=\"6\" style=\"text-align: center;\">\n                        <ion-select style=\"padding:0\">\n                            <ion-select-option value=\"01\">2020</ion-select-option>\n                            <ion-select-option value=\"02\">2021</ion-select-option>\n                            <ion-select-option value=\"03\">2023</ion-select-option>\n                            <ion-select-option value=\"04\">2024</ion-select-option>\n                            <ion-select-option value=\"05\">2025</ion-select-option>\n                            <ion-select-option value=\"06\">2026</ion-select-option>\n                            <ion-select-option value=\"07\">2027</ion-select-option>\n                            <ion-select-option value=\"08\">2028</ion-select-option>\n                            <ion-select-option value=\"09\">2029</ion-select-option>\n                            <ion-select-option value=\"10\">2030</ion-select-option>\n                            <ion-select-option value=\"11\">2031</ion-select-option>\n                            <ion-select-option value=\"12\" >2032</ion-select-option>\n                          </ion-select>\n                    </ion-col>\n                  \n                  </ion-row>\n               \n                 \n            </ion-item>\n          \n            <ion-item>\n                <ion-label position=\"stacked\">Cvv</ion-label>\n                <ion-input name=\"cvv\" ></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-button expand=\"block\" fill=\"outline\" style=\"width:100%\" (click)=\"goToHome()\">Payment $75</ion-button>\n            </ion-item>\n      </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/invoice-page/invoice-page-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/invoice-page/invoice-page-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: InvoicePagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicePagePageRoutingModule", function() { return InvoicePagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _invoice_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invoice-page.page */ "./src/app/pages/invoice-page/invoice-page.page.ts");




const routes = [
    {
        path: '',
        component: _invoice_page_page__WEBPACK_IMPORTED_MODULE_3__["InvoicePagePage"]
    }
];
let InvoicePagePageRoutingModule = class InvoicePagePageRoutingModule {
};
InvoicePagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InvoicePagePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/invoice-page/invoice-page.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/invoice-page/invoice-page.module.ts ***!
  \***********************************************************/
/*! exports provided: InvoicePagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicePagePageModule", function() { return InvoicePagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _invoice_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invoice-page-routing.module */ "./src/app/pages/invoice-page/invoice-page-routing.module.ts");
/* harmony import */ var _invoice_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./invoice-page.page */ "./src/app/pages/invoice-page/invoice-page.page.ts");







let InvoicePagePageModule = class InvoicePagePageModule {
};
InvoicePagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _invoice_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["InvoicePagePageRoutingModule"]
        ],
        declarations: [_invoice_page_page__WEBPACK_IMPORTED_MODULE_6__["InvoicePagePage"]]
    })
], InvoicePagePageModule);



/***/ }),

/***/ "./src/app/pages/invoice-page/invoice-page.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/invoice-page/invoice-page.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludm9pY2UtcGFnZS9pbnZvaWNlLXBhZ2UucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/invoice-page/invoice-page.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/invoice-page/invoice-page.page.ts ***!
  \*********************************************************/
/*! exports provided: InvoicePagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicePagePage", function() { return InvoicePagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let InvoicePagePage = class InvoicePagePage {
    constructor(router, route, alertController) {
        this.router = router;
        this.route = route;
        this.alertController = alertController;
        this.cartItems = [];
        this.card = false;
        this.cod = false;
        this.route.queryParams.subscribe(params => {
            if (params && params.special) {
                this.data = JSON.parse(params.special);
            }
        });
    }
    ngOnInit() {
        console.log("back from all address", this.data);
        let a = [];
        if (!JSON.parse(localStorage.getItem('products'))) {
        }
        else {
            this.totalAmount = 0;
            a = JSON.parse(localStorage.getItem('products'));
            a.map((item) => {
                item.productQuantity = 1;
                this.totalAmount = this.totalAmount + item.price;
            });
            console.log('adata', a);
        }
        localStorage.setItem('products', JSON.stringify(a));
        this.cartItems = a;
        console.log('cartItems', this.cartItems);
        console.log('this.totalAmount', this.totalAmount);
    }
    viaCard() {
        this.card = true;
        this.cod = false;
    }
    cashOnDelivery() {
        this.card = false;
        this.cod = true;
    }
    chengeAddress() {
        this.router.navigate(['all-address']);
    }
    goToHome() {
        if (this.data) {
            this.router.navigate(['home']);
        }
        else {
            this.presentAlert();
        }
    }
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Please add Address',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
InvoicePagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
InvoicePagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-invoice-page',
        template: __webpack_require__(/*! raw-loader!./invoice-page.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/invoice-page/invoice-page.page.html"),
        styles: [__webpack_require__(/*! ./invoice-page.page.scss */ "./src/app/pages/invoice-page/invoice-page.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], InvoicePagePage);



/***/ })

}]);
//# sourceMappingURL=pages-invoice-page-invoice-page-module-es2015.js.map