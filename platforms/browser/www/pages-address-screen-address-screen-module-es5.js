(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-address-screen-address-screen-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/address-screen/address-screen.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/address-screen/address-screen.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"bg-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"white\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add New Address</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ng-container>\n    <ion-card>\n      <ion-item id=\"name\">\n        <ion-label position=\"stacked\" [ngClass]=\"address.nameRed\">Name *</ion-label>\n        <ion-input name=\"name\" [(ngModel)]=\"address.name\" (input)=\"ttt()\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Mobile Number</ion-label>\n        <ion-input name=\"mobile\" [(ngModel)]=\"address.mobile\"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label position=\"stacked\">Locality</ion-label>\n          <ion-input name=\"locality\" [(ngModel)]=\"address.locality\"></ion-input>\n       </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Address</ion-label>\n        <ion-textarea name=\"add1\" [(ngModel)]=\"address.address\"></ion-textarea>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label position=\"stacked\">Landmark</ion-label>\n        <ion-input name=\"landmark\" [(ngModel)]=\"address.landmark\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">City</ion-label>\n        <ion-input name=\"city\" [(ngModel)]=\"address.city\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">State</ion-label>\n        <ion-input name=\"state\" [(ngModel)]=\"address.state\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">ZIP code</ion-label>\n        <ion-input name=\"zip\" [(ngModel)]=\"address.zip\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Country</ion-label>\n        <ion-input name=\"country\" [(ngModel)]=\"address.country\"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label position=\"stacked\">Alternate Phone</ion-label>\n          <ion-input name=\"alternate\" [(ngModel)]=\"address.alternate\"></ion-input>\n        </ion-item>\n    </ion-card>\n\n    <ion-card>\n      <ion-button (click)=\"addAddress()\">Continue</ion-button>\n      <ion-button (click)=\"reset()\">Reset</ion-button>\n\n    </ion-card>\n  </ng-container>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/address-screen/address-screen-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/address-screen/address-screen-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: AddressScreenPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressScreenPageRoutingModule", function() { return AddressScreenPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _address_screen_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./address-screen.page */ "./src/app/pages/address-screen/address-screen.page.ts");




var routes = [
    {
        path: '',
        component: _address_screen_page__WEBPACK_IMPORTED_MODULE_3__["AddressScreenPage"]
    }
];
var AddressScreenPageRoutingModule = /** @class */ (function () {
    function AddressScreenPageRoutingModule() {
    }
    AddressScreenPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AddressScreenPageRoutingModule);
    return AddressScreenPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/address-screen/address-screen.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/address-screen/address-screen.module.ts ***!
  \***************************************************************/
/*! exports provided: AddressScreenPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressScreenPageModule", function() { return AddressScreenPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _address_screen_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./address-screen-routing.module */ "./src/app/pages/address-screen/address-screen-routing.module.ts");
/* harmony import */ var _address_screen_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./address-screen.page */ "./src/app/pages/address-screen/address-screen.page.ts");







var AddressScreenPageModule = /** @class */ (function () {
    function AddressScreenPageModule() {
    }
    AddressScreenPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _address_screen_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddressScreenPageRoutingModule"]
            ],
            declarations: [_address_screen_page__WEBPACK_IMPORTED_MODULE_6__["AddressScreenPage"]]
        })
    ], AddressScreenPageModule);
    return AddressScreenPageModule;
}());



/***/ }),

/***/ "./src/app/pages/address-screen/address-screen.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/address-screen/address-screen.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".red {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ViYy0yMS9Eb2N1bWVudHMvaW9uYXBwL2dpdC9uZXdHaXQvbmxmSW9uaWMvc3JjL2FwcC9wYWdlcy9hZGRyZXNzLXNjcmVlbi9hZGRyZXNzLXNjcmVlbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FkZHJlc3Mtc2NyZWVuL2FkZHJlc3Mtc2NyZWVuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZHJlc3Mtc2NyZWVuL2FkZHJlc3Mtc2NyZWVuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWR7XG4gICAgY29sb3I6cmVkO1xufSIsIi5yZWQge1xuICBjb2xvcjogcmVkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/address-screen/address-screen.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/address-screen/address-screen.page.ts ***!
  \*************************************************************/
/*! exports provided: AddressScreenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressScreenPage", function() { return AddressScreenPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var AddressScreenPage = /** @class */ (function () {
    function AddressScreenPage(router, alertController) {
        this.router = router;
        this.alertController = alertController;
        this.address = {
            name: '',
            mobile: '',
            locality: '',
            address: '',
            landmark: '',
            city: '',
            state: '',
            zip: '',
            country: '',
            alternate: '',
        };
    }
    AddressScreenPage.prototype.ngOnInit = function () {
        this.getLoginEmail();
        console.log("login", this.login);
    };
    AddressScreenPage.prototype.getLoginEmail = function () {
        this.login = localStorage.getItem("login");
    };
    AddressScreenPage.prototype.addAddress = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, address, localAddress, test;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.validate()];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            address = [];
                            localAddress = [];
                            if (!JSON.parse(localStorage.getItem('address'))) {
                                localAddress.push({
                                    email: this.login,
                                    address: [this.address],
                                });
                            }
                            else {
                                localAddress = JSON.parse(localStorage.getItem('address'));
                                test = localAddress.filter(function (item) {
                                    if (item.email == _this.login) {
                                        item.address.push(_this.address);
                                        return item.email;
                                    }
                                });
                                console.log('testlength', test.length);
                                if (test.length == 0) {
                                    localAddress.push({
                                        email: this.login,
                                        address: [this.address],
                                    });
                                }
                                console.log('test', test);
                                // localAddress.map((item)=>{
                                //   if(item.email == this.login){
                                //     item.address.push(this.address);
                                //   } 
                                // })
                                // localAddress.push(this.address)
                            }
                            localStorage.setItem("address", JSON.stringify(localAddress));
                            this.reset();
                            this.router.navigate(['all-address']);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AddressScreenPage.prototype.reset = function () {
        this.address = {
            name: '',
            mobile: '',
            locality: '',
            address: '',
            landmark: '',
            city: '',
            state: '',
            zip: '',
            country: '',
            alternate: '',
        };
    };
    AddressScreenPage.prototype.continue = function () {
        this.router.navigate(['invoice-page']);
    };
    AddressScreenPage.prototype.validate = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.address.name = this.address.name.trim();
                if (this.address.name == '') {
                    this.address['nameRed'] = 'red';
                    this.scrolltoDiv('name');
                    this.presentAlert();
                    return [2 /*return*/, false];
                }
                else {
                    return [2 /*return*/, true];
                }
                return [2 /*return*/];
            });
        });
    };
    AddressScreenPage.prototype.ttt = function () {
        if (this.address.name !== '') {
            this.address['nameRed'] = '';
        }
    };
    AddressScreenPage.prototype.scrolltoDiv = function (id) {
        var todayItem = document.getElementById(id);
        todayItem.scrollIntoView(true);
    };
    AddressScreenPage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Alert',
                            // subHeader: 'Subtitle',
                            message: 'Please add mandatory fields.',
                            buttons: [{
                                    text: 'Ok',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        _this.closetest();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddressScreenPage.prototype.closetest = function () {
        console.log("clocsetest");
    };
    AddressScreenPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
    AddressScreenPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-address-screen',
            template: __webpack_require__(/*! raw-loader!./address-screen.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/address-screen/address-screen.page.html"),
            styles: [__webpack_require__(/*! ./address-screen.page.scss */ "./src/app/pages/address-screen/address-screen.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], AddressScreenPage);
    return AddressScreenPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-address-screen-address-screen-module-es5.js.map