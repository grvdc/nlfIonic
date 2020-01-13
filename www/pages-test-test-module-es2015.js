(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-test-test-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/test/test.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/test/test.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"bg-color\">\n    <ion-title>test</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"height:50%;width:100%;background: rgb(151, 94, 77);\">\n\n  </div>\n\n\n  <ion-slides [options]=\"slideOpts\" style=\"width: 100%; \n  /* padding-top: 5%; */\n  /* text-align: center; */\n  position: absolute;\n  z-index: 99;\n  /* bottom: 31%; */\n  /* opacity: 0.5; */\n  /* top: 0px; */\n  top: 44%;\n  color: white;\n  font-weight: bold;\n  /* background-color: #dc0000; */\n  /* left: 40%; */\n  font-size: 20px;\">\n    <ion-slide>\n      <ion-card style=\"width:80%;background: white;\">\n        <ion-card-content>\n          <h1>Slide 1</h1>\n        </ion-card-content>\n      </ion-card>\n    </ion-slide>\n    <ion-slide>\n        <ion-card style=\"width:80%;background: white;\">\n          <ion-card-content>\n            <h1>Slide 2</h1>\n          </ion-card-content>\n        </ion-card>\n      </ion-slide>\n      <ion-slide>\n          <ion-card style=\"width:80%;background: white;\">\n            <ion-card-content>\n              <h1>Slide 3</h1>\n            </ion-card-content>\n          </ion-card>\n        </ion-slide>\n  </ion-slides>\n\n\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/test/test-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/test/test-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TestPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageRoutingModule", function() { return TestPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _test_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test.page */ "./src/app/pages/test/test.page.ts");




const routes = [
    {
        path: '',
        component: _test_page__WEBPACK_IMPORTED_MODULE_3__["TestPage"]
    }
];
let TestPageRoutingModule = class TestPageRoutingModule {
};
TestPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TestPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/test/test.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/test/test.module.ts ***!
  \*******************************************/
/*! exports provided: TestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageModule", function() { return TestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _test_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-routing.module */ "./src/app/pages/test/test-routing.module.ts");
/* harmony import */ var _test_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test.page */ "./src/app/pages/test/test.page.ts");







let TestPageModule = class TestPageModule {
};
TestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _test_routing_module__WEBPACK_IMPORTED_MODULE_5__["TestPageRoutingModule"]
        ],
        declarations: [_test_page__WEBPACK_IMPORTED_MODULE_6__["TestPage"]]
    })
], TestPageModule);



/***/ }),

/***/ "./src/app/pages/test/test.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/test/test.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".md .swiper-slide .swiper-slide-active,\n.ios .swiper-slide .swiper-slide-active,\n.wp .swiper-slide .swiper-slide-active {\n  width: 100px;\n  margin-left: 50px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ViYy0yMS9Eb2N1bWVudHMvaW9uYXBwL2dpdC9uZXdHaXQvbmxmSW9uaWMvc3JjL2FwcC9wYWdlcy90ZXN0L3Rlc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90ZXN0L3Rlc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdNOzs7RUFDRyxZQUFBO0VBQ0EsNEJBQUE7QUNBVCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlc3QvdGVzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWQsXG4gIC5pb3MsXG4gIC53cCB7XG4gICAgICAuc3dpcGVyLXNsaWRlIC5zd2lwZXItc2xpZGUtYWN0aXZle1xuICAgICAgICAgd2lkdGg6IDEwMHB4Oy8veW91ciB3aWR0aCBoZXJlXG4gICAgICAgICBtYXJnaW4tbGVmdDogNTBweCAhaW1wb3J0YW50O1xuICAgICB9XG4gICB9IiwiLm1kIC5zd2lwZXItc2xpZGUgLnN3aXBlci1zbGlkZS1hY3RpdmUsXG4uaW9zIC5zd2lwZXItc2xpZGUgLnN3aXBlci1zbGlkZS1hY3RpdmUsXG4ud3AgLnN3aXBlci1zbGlkZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSB7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDUwcHggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/test/test.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/test/test.page.ts ***!
  \*****************************************/
/*! exports provided: TestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPage", function() { return TestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TestPage = class TestPage {
    constructor() {
        this.slideOpts = {
            initialSlide: 1,
            speed: 400,
            autoplay: false,
            loop: true,
        };
    }
    ngOnInit() {
    }
};
TestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test',
        template: __webpack_require__(/*! raw-loader!./test.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/test/test.page.html"),
        styles: [__webpack_require__(/*! ./test.page.scss */ "./src/app/pages/test/test.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TestPage);



/***/ })

}]);
//# sourceMappingURL=pages-test-test-module-es2015.js.map