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

module.exports = ".mylogin-page {\n  background-image: url('login_screen.png');\n  width: 100%;\n  height: 100%;\n  background-size: 100% 100%;\n}\n.mylogin-page .login-color {\n  height: 100%;\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(165, 84, 216, 0.2)), color-stop(100%, rgba(90, 57, 183, 0.4)), to(rgba(46, 65, 173, 0.4)));\n  background: linear-gradient(to bottom, rgba(165, 84, 216, 0.2) 0%, rgba(90, 57, 183, 0.4) 100%, rgba(46, 65, 173, 0.4) 100%);\n}\n.mylogin-page .login-color .login-header {\n  width: 100%;\n  text-align: center;\n  font-size: 18pt;\n  color: #fff;\n  padding-top: 5%;\n}\n.mylogin-page .login-color .content {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.mylogin-page .login-color .content .center {\n  -webkit-box-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n.mylogin-page .login-color .content .center .butn {\n  background-color: #5b39b7;\n  border-radius: 25px;\n}\n.mylogin-page .login-color .content .login {\n  border: solid 1px grey;\n  border-radius: 25px;\n  margin-bottom: 10px;\n  --highlight-color-focused: none;\n}\n.mylogin-page .login-color .content .login .icon-color {\n  color: #785dc8 !important;\n}\n.mylogin-page .login-color .content .forgot-password {\n  color: #fff;\n  font-size: 12pt;\n}\n.mylogin-page .login-color .sign-up {\n  margin-top: -35%;\n  width: 100%;\n  text-align: center;\n  font-size: 12pt;\n  color: #fff !important;\n}\n.mylogin-page .login-color .sign-up .sign-up-a {\n  font-size: 14pt !important;\n  color: #fff !important;\n}\n.red {\n  background-color: red;\n}\n.red header {\n  background: yellow;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ViYy0yMS9Eb2N1bWVudHMvaW9uYXBwL3Bob25lZ2FwLWlvbmljL3NyYy9hcHAvcGFnZXMvbG9naW4tcGFnZS9sb2dpbi1wYWdlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4tcGFnZS9sb2dpbi1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHlDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQ0RKO0FERUk7RUFDSSxZQUFBO0VBQ0EsZ0tBQUE7RUFBQSw0SEFBQTtBQ0FSO0FEQ1E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNDWjtBRENTO0VBQ0csWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ1o7QURBWTtFQUNJLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxrQkFBQTtBQ0VoQjtBRERnQjtFQUNJLHlCQUFBO0VBQXlCLG1CQUFBO0FDSTdDO0FERFk7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtBQ0doQjtBREZnQjtFQUNJLHlCQUFBO0FDSXBCO0FERFk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0doQjtBREFTO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUNFYjtBRERhO0VBQ0csMEJBQUE7RUFDQSxzQkFBQTtBQ0doQjtBRElBO0VBSUkscUJBQUE7QUNKSjtBRENJO0VBQ0ksa0JBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLm15bG9naW4tcGFnZXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9sb2dpbl9zY3JlZW4ucG5nJyk7IFxuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgYmFja2dyb3VuZC1zaXplOjEwMCUgMTAwJTtcbiAgICAubG9naW4tY29sb3J7XG4gICAgICAgIGhlaWdodDoxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMTY1LDg0LDIxNiwwLjIpIDAlLCByZ2JhKDkwLDU3LDE4MywwLjQpIDEwMCUsIHJnYmEoNDYsNjUsMTczLDAuNCkgMTAwJSk7XG4gICAgICAgIC5sb2dpbi1oZWFkZXJ7XG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOjE4cHQ7XG4gICAgICAgICAgICBjb2xvcjojZmZmO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6NSU7XG4gICAgICAgICB9XG4gICAgICAgICAuY29udGVudHtcbiAgICAgICAgICAgIGhlaWdodDoxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgICAgICAgICAgLmNlbnRlcntcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAuYnV0bntcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojNWIzOWI3O2JvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxvZ2lue1xuICAgICAgICAgICAgICAgIGJvcmRlcjpzb2xpZCAxcHggZ3JleTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjI1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOiBub25lO1xuICAgICAgICAgICAgICAgIC5pY29uLWNvbG9ye1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzc4NWRjOCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3Jnb3QtcGFzc3dvcmR7XG4gICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICAgICAuc2lnbi11cHtcbiAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMzUlO1xuICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgIGZvbnQtc2l6ZToxMnB0O1xuICAgICAgICAgICAgIGNvbG9yOiNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAuc2lnbi11cC1he1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgICAgIFxuICAgIH1cbn1cblxuLnJlZHtcbiAgICBoZWFkZXJ7XG4gICAgICAgIGJhY2tncm91bmQ6IHllbGxvdztcbiAgICB9XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuIiwiLm15bG9naW4tcGFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9sb2dpbl9zY3JlZW4ucG5nXCIpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cbi5teWxvZ2luLXBhZ2UgLmxvZ2luLWNvbG9yIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDE2NSwgODQsIDIxNiwgMC4yKSAwJSwgcmdiYSg5MCwgNTcsIDE4MywgMC40KSAxMDAlLCByZ2JhKDQ2LCA2NSwgMTczLCAwLjQpIDEwMCUpO1xufVxuLm15bG9naW4tcGFnZSAubG9naW4tY29sb3IgLmxvZ2luLWhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThwdDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmctdG9wOiA1JTtcbn1cbi5teWxvZ2luLXBhZ2UgLmxvZ2luLWNvbG9yIC5jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5teWxvZ2luLXBhZ2UgLmxvZ2luLWNvbG9yIC5jb250ZW50IC5jZW50ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm15bG9naW4tcGFnZSAubG9naW4tY29sb3IgLmNvbnRlbnQgLmNlbnRlciAuYnV0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YjM5Yjc7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG4ubXlsb2dpbi1wYWdlIC5sb2dpbi1jb2xvciAuY29udGVudCAubG9naW4ge1xuICBib3JkZXI6IHNvbGlkIDFweCBncmV5O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOiBub25lO1xufVxuLm15bG9naW4tcGFnZSAubG9naW4tY29sb3IgLmNvbnRlbnQgLmxvZ2luIC5pY29uLWNvbG9yIHtcbiAgY29sb3I6ICM3ODVkYzggIWltcG9ydGFudDtcbn1cbi5teWxvZ2luLXBhZ2UgLmxvZ2luLWNvbG9yIC5jb250ZW50IC5mb3Jnb3QtcGFzc3dvcmQge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxMnB0O1xufVxuLm15bG9naW4tcGFnZSAubG9naW4tY29sb3IgLnNpZ24tdXAge1xuICBtYXJnaW4tdG9wOiAtMzUlO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEycHQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4ubXlsb2dpbi1wYWdlIC5sb2dpbi1jb2xvciAuc2lnbi11cCAuc2lnbi11cC1hIHtcbiAgZm9udC1zaXplOiAxNHB0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG4ucmVkIGhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHllbGxvdztcbn0iXX0= */"

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






let LoginPagePage = class LoginPagePage {
    constructor(toastController, router, modal, alertController) {
        this.toastController = toastController;
        this.router = router;
        this.modal = modal;
        this.alertController = alertController;
        this.email = '';
        this.password = '';
        this.error = [];
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
            localStorage.setItem("login", 'true');
            let data = localStorage.getItem("login");
            if (data) {
                this.email = '';
                this.password = '';
                this.router.navigateByUrl('/home');
            }
        }
        else {
            this.error[0] = "Please enter valid email!";
            this.presentModal(this.error);
            // this.presentToast();
            // this.presentAlertConfirm();
        }
    }
    presentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: this.email ? 'Please enter valid email!' : 'Please enter email id!',
                duration: 2000,
                position: 'top'
            });
            toast.present();
        });
    }
    presentAlertConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm!',
                message: 'Message <strong>text</strong>!!!',
                cssClass: 'red',
                mode: "ios",
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'red',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }
                ]
            });
            yield alert.present();
        });
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