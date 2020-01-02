(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-page-login-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login-page/login-page.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login-page/login-page.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mylogin-page\">\n  <div class=\"login-color\">\n\n    <!-- <div class=\"login-header\">Login</div> -->\n    <div class=\"content\">\n      <ion-row class=\"center\" >\n        <ion-col size=\"10\">\n          <ion-item class=\"login\">\n            <ion-label class=\"icon-color\">\n              <ion-icon name=\"person\"></ion-icon>\n            </ion-label>\n            <ion-input clearInput type=\"text\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"email\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"10\">\n          <ion-item class=\"login\">\n            <ion-label class=\"icon-color\">\n              <ion-icon name=\"lock\"></ion-icon>\n            </ion-label>\n            <ion-input clearInput type=\"password\" placeholder=\"Password\" name=\"email\" [(ngModel)]=\"password\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"10\">\n          <ion-button expand=\"full\" type=\"submit\" color=\"#fff !important\" class=\"butn\" (click)=\"checkData()\">LOGIN</ion-button>\n        </ion-col>\n        <ion-col size=\"10\">\n          <p class=\"forgot-password\">Forgot password?</p>\n        </ion-col>\n       \n        \n      </ion-row>\n    </div>\n    <div class=\"sign-up\">\n      <p>Don't have an account? <a class=\"sign-up-a\">Sign Up</a><br><br>\n        WWW.NOLEADFINES.COM\n      </p>\n      \n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/login-page/login-page-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/login-page/login-page-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: LoginPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPagePageRoutingModule", function() { return LoginPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-page.page */ "./src/app/pages/login-page/login-page.page.ts");




const routes = [
    {
        path: '',
        component: _login_page_page__WEBPACK_IMPORTED_MODULE_3__["LoginPagePage"]
    }
];
let LoginPagePageRoutingModule = class LoginPagePageRoutingModule {
};
LoginPagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPagePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login-page/login-page.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/login-page/login-page.module.ts ***!
  \*******************************************************/
/*! exports provided: LoginPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPagePageModule", function() { return LoginPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-page-routing.module */ "./src/app/pages/login-page/login-page-routing.module.ts");
/* harmony import */ var _login_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-page.page */ "./src/app/pages/login-page/login-page.page.ts");







let LoginPagePageModule = class LoginPagePageModule {
};
LoginPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPagePageRoutingModule"]
        ],
        declarations: [_login_page_page__WEBPACK_IMPORTED_MODULE_6__["LoginPagePage"]]
    })
], LoginPagePageModule);



/***/ }),

/***/ "./src/app/pages/login-page/login-page.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/login-page/login-page.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mylogin-page {\n  background-image: url('login_screen.png');\n  width: 100%;\n  height: 100%;\n  background-size: 100% 100%;\n}\n.mylogin-page .login-color {\n  height: 100%;\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(165, 84, 216, 0.2)), color-stop(100%, rgba(90, 57, 183, 0.4)), to(rgba(46, 65, 173, 0.4)));\n  background: linear-gradient(to bottom, rgba(165, 84, 216, 0.2) 0%, rgba(90, 57, 183, 0.4) 100%, rgba(46, 65, 173, 0.4) 100%);\n}\n.mylogin-page .login-color .login-header {\n  width: 100%;\n  text-align: center;\n  font-size: 18pt;\n  color: #fff;\n  padding-top: 5%;\n}\n.mylogin-page .login-color .content {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.mylogin-page .login-color .content .center {\n  -webkit-box-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n.mylogin-page .login-color .content .center .butn {\n  background-color: #5b39b7;\n  border-radius: 25px;\n}\n.mylogin-page .login-color .content .login {\n  border: solid 1px grey;\n  border-radius: 25px;\n  margin-bottom: 10px;\n  --highlight-color-focused: none;\n}\n.mylogin-page .login-color .content .login .icon-color {\n  color: #785dc8 !important;\n}\n.mylogin-page .login-color .content .forgot-password {\n  color: #fff;\n  font-size: 12pt;\n}\n.mylogin-page .login-color .sign-up {\n  margin-top: -35%;\n  width: 100%;\n  text-align: center;\n  font-size: 12pt;\n  color: #fff !important;\n}\n.mylogin-page .login-color .sign-up .sign-up-a {\n  font-size: 14pt !important;\n  color: #fff !important;\n}\n.red {\n  background-color: red;\n}\n.red header {\n  background: yellow;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ViYy0yMS9Eb2N1bWVudHMvaW9uYXBwL2dpdC9uZXdHaXQvbmxmSW9uaWMvc3JjL2FwcC9wYWdlcy9sb2dpbi1wYWdlL2xvZ2luLXBhZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi1wYWdlL2xvZ2luLXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kseUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FDREo7QURFSTtFQUNJLFlBQUE7RUFDQSxnS0FBQTtFQUFBLDRIQUFBO0FDQVI7QURDUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0NaO0FEQ1M7RUFDRyxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDWjtBREFZO0VBQ0ksd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGtCQUFBO0FDRWhCO0FERGdCO0VBQ0kseUJBQUE7RUFBeUIsbUJBQUE7QUNJN0M7QUREWTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FDR2hCO0FERmdCO0VBQ0kseUJBQUE7QUNJcEI7QUREWTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDR2hCO0FEQVM7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQ0ViO0FERGE7RUFDRywwQkFBQTtFQUNBLHNCQUFBO0FDR2hCO0FESUE7RUFJSSxxQkFBQTtBQ0pKO0FEQ0k7RUFDSSxrQkFBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4tcGFnZS9sb2dpbi1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ubXlsb2dpbi1wYWdle1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2xvZ2luX3NjcmVlbi5wbmcnKTsgXG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6MTAwJSAxMDAlO1xuICAgIC5sb2dpbi1jb2xvcntcbiAgICAgICAgaGVpZ2h0OjEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgxNjUsODQsMjE2LDAuMikgMCUsIHJnYmEoOTAsNTcsMTgzLDAuNCkgMTAwJSwgcmdiYSg0Niw2NSwxNzMsMC40KSAxMDAlKTtcbiAgICAgICAgLmxvZ2luLWhlYWRlcntcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6MThwdDtcbiAgICAgICAgICAgIGNvbG9yOiNmZmY7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDo1JTtcbiAgICAgICAgIH1cbiAgICAgICAgIC5jb250ZW50e1xuICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgICAgICAgICAuY2VudGVye1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIC5idXRue1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiM1YjM5Yjc7Ym9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubG9naW57XG4gICAgICAgICAgICAgICAgYm9yZGVyOnNvbGlkIDFweCBncmV5O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MjVweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6IG5vbmU7XG4gICAgICAgICAgICAgICAgLmljb24tY29sb3J7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzg1ZGM4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcmdvdC1wYXNzd29yZHtcbiAgICAgICAgICAgICAgICBjb2xvcjojZmZmO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJwdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgICAgIC5zaWduLXVwe1xuICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0zNSU7XG4gICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgZm9udC1zaXplOjEycHQ7XG4gICAgICAgICAgICAgY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgIC5zaWduLXVwLWF7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjE0cHQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBjb2xvcjojZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgICAgXG4gICAgfVxufVxuXG4ucmVke1xuICAgIGhlYWRlcntcbiAgICAgICAgYmFja2dyb3VuZDogeWVsbG93O1xuICAgIH1cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG4iLCIubXlsb2dpbi1wYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2xvZ2luX3NjcmVlbi5wbmdcIik7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuLm15bG9naW4tcGFnZSAubG9naW4tY29sb3Ige1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMTY1LCA4NCwgMjE2LCAwLjIpIDAlLCByZ2JhKDkwLCA1NywgMTgzLCAwLjQpIDEwMCUsIHJnYmEoNDYsIDY1LCAxNzMsIDAuNCkgMTAwJSk7XG59XG4ubXlsb2dpbi1wYWdlIC5sb2dpbi1jb2xvciAubG9naW4taGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB0O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZy10b3A6IDUlO1xufVxuLm15bG9naW4tcGFnZSAubG9naW4tY29sb3IgLmNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm15bG9naW4tcGFnZSAubG9naW4tY29sb3IgLmNvbnRlbnQgLmNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubXlsb2dpbi1wYWdlIC5sb2dpbi1jb2xvciAuY29udGVudCAuY2VudGVyIC5idXRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzViMzliNztcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cbi5teWxvZ2luLXBhZ2UgLmxvZ2luLWNvbG9yIC5jb250ZW50IC5sb2dpbiB7XG4gIGJvcmRlcjogc29saWQgMXB4IGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6IG5vbmU7XG59XG4ubXlsb2dpbi1wYWdlIC5sb2dpbi1jb2xvciAuY29udGVudCAubG9naW4gLmljb24tY29sb3Ige1xuICBjb2xvcjogIzc4NWRjOCAhaW1wb3J0YW50O1xufVxuLm15bG9naW4tcGFnZSAubG9naW4tY29sb3IgLmNvbnRlbnQgLmZvcmdvdC1wYXNzd29yZCB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEycHQ7XG59XG4ubXlsb2dpbi1wYWdlIC5sb2dpbi1jb2xvciAuc2lnbi11cCB7XG4gIG1hcmdpbi10b3A6IC0zNSU7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJwdDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5teWxvZ2luLXBhZ2UgLmxvZ2luLWNvbG9yIC5zaWduLXVwIC5zaWduLXVwLWEge1xuICBmb250LXNpemU6IDE0cHQgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLnJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbi5yZWQgaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogeWVsbG93O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login-page/login-page.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login-page/login-page.page.ts ***!
  \*****************************************************/
/*! exports provided: LoginPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPagePage", function() { return LoginPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_components_error_popup_error_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/error-popup/error-popup.component */ "./src/app/components/error-popup/error-popup.component.ts");
/* harmony import */ var _tsFiles_dummyUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../tsFiles/dummyUser */ "./src/app/tsFiles/dummyUser.ts");







let LoginPagePage = class LoginPagePage {
    constructor(toastController, router, modal, alertController) {
        this.toastController = toastController;
        this.router = router;
        this.modal = modal;
        this.alertController = alertController;
        this.email = '';
        this.password = '';
        this.error = [];
        this.dummyUser = _tsFiles_dummyUser__WEBPACK_IMPORTED_MODULE_5__["dummyUser"].user;
        let data = localStorage.getItem("login");
        if (data) {
            this.router.navigateByUrl('/home');
        }
        else {
            // this.menu.enable(false);
        }
    }
    ngOnInit() {
    }
    presentModal(error) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: src_app_components_error_popup_error_popup_component__WEBPACK_IMPORTED_MODULE_4__["ErrorPopupComponent"],
                cssClass: 'my-custom-modal-css',
                componentProps: {
                    errorList: this.error,
                }
            });
            modal.onDidDismiss().then((detail) => {
                if (detail !== null) {
                    console.log('The result:', detail.data);
                    // this.theTestReturn = detail.data;
                }
            });
            return yield modal.present();
        });
    }
    checkData() {
        this.error = [];
        if (!this.email && !this.password) {
            this.error[0] = "Email is Required";
            this.error[1] = "Password is Required";
            this.presentModal(this.error);
            return false;
        }
        else {
            if (!this.password) {
                this.error[0] = "Password is Required";
                this.presentModal(this.error);
                return false;
            }
            else {
                this.login();
                return true;
            }
        }
    }
    login() {
        //  this.checkData();
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
            console.log('checked');
            this.dummyUser.map((item) => {
                if (this.email === item.email) {
                    if (this.password === item.password) {
                        localStorage.setItem("login", item.email);
                    }
                }
            });
            let data = localStorage.getItem("login");
            if (!data) {
                this.error[0] = "User not Exist Please SignUp!";
                this.presentModal(this.error);
            }
            else {
                this.email = '';
                this.password = '';
                this.router.navigateByUrl('/home');
            }
        }
        else {
            this.error[0] = "Please enter valid email!";
            this.presentModal(this.error);
        }
    }
};
LoginPagePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
LoginPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-page',
        template: __webpack_require__(/*! raw-loader!./login-page.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login-page/login-page.page.html"),
        styles: [__webpack_require__(/*! ./login-page.page.scss */ "./src/app/pages/login-page/login-page.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], LoginPagePage);



/***/ })

}]);
//# sourceMappingURL=pages-login-page-login-page-module-es2015.js.map