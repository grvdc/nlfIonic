(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-page-login-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login-page/login-page.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login-page/login-page.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mylogin-page\">\n  <div class=\"login-color\">\n\n    <!-- <div class=\"login-header\">Login</div> -->\n    <div class=\"content\">\n      <ion-row class=\"center\" >\n        <ion-col size=\"10\">\n          <ion-item class=\"login\">\n            <ion-label class=\"icon-color\">\n              <ion-icon name=\"person\"></ion-icon>\n            </ion-label>\n            <ion-input clearInput type=\"text\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"email\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"10\">\n          <ion-item class=\"login\">\n            <ion-label class=\"icon-color\">\n              <ion-icon name=\"lock\"></ion-icon>\n            </ion-label>\n            <ion-input clearInput type=\"password\" placeholder=\"Password\" name=\"email\" [(ngModel)]=\"password\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"10\">\n          <p class=\"forgot-password\" style=\"margin: 0;padding: 0;\">Forgot password?</p>\n            \n          <ion-button expand=\"full\" type=\"submit\" style=\"height: 48px;\" color=\"#fff !important\" class=\"butn bg-color\" (click)=\"checkData()\">LOGIN</ion-button>\n        </ion-col>\n        <ion-col size=\"10\" style=\"color: white;\">\n          <!-- <p class=\"forgot-password\">Forgot password?</p> -->\n          <p>Don't have an account? <a class=\"sign-up-a\" style=\"color: #de6161\">Sign Up</a><br><br></p>\n        </ion-col>\n       \n        \n      </ion-row>\n    </div>\n    <div class=\"sign-up\">\n      <!-- <p>Don't have an account? <a class=\"sign-up-a\">Sign Up</a><br><br> -->\n        <!-- WWW.NOLEADFINES.COM -->\n      <!-- </p> -->\n      \n    </div>\n\n  </div>\n</div>"

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

module.exports = ".mylogin-page {\n  background-image: url('login.jpg');\n  width: 100%;\n  height: 100%;\n}\n.mylogin-page .login-color {\n  height: 100%;\n}\n.mylogin-page .login-color .login-header {\n  width: 100%;\n  text-align: center;\n  font-size: 18pt;\n  color: #fff;\n  padding-top: 5%;\n}\n.mylogin-page .login-color .content {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.mylogin-page .login-color .content .center {\n  -webkit-box-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n.mylogin-page .login-color .content .center .butn {\n  background-color: #de6161;\n  border-radius: 25px;\n}\n.mylogin-page .login-color .content .login {\n  border: solid 1px grey;\n  border-radius: 25px;\n  margin-bottom: 10px;\n  --highlight-color-focused: none;\n}\n.mylogin-page .login-color .content .login .icon-color {\n  color: #de6161 !important;\n}\n.mylogin-page .login-color .content .forgot-password {\n  color: #fff;\n  font-size: 12pt;\n}\n.mylogin-page .login-color .sign-up {\n  margin-top: -35%;\n  width: 100%;\n  text-align: center;\n  font-size: 12pt;\n  color: #fff !important;\n}\n.mylogin-page .login-color .sign-up .sign-up-a {\n  font-size: 14pt !important;\n  color: #fff !important;\n}\n.red {\n  background-color: red;\n}\n.red header {\n  background: yellow;\n}\nion-col {\n  padding: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ViYy0yMS9Eb2N1bWVudHMvaW9uYXBwL2dpdC9uZXdHaXQvbmxmSW9uaWMvc3JjL2FwcC9wYWdlcy9sb2dpbi1wYWdlL2xvZ2luLXBhZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi1wYWdlL2xvZ2luLXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0RKO0FER0k7RUFDSSxZQUFBO0FDRFI7QURHUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0RaO0FER1M7RUFDRyxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNEWjtBREVZO0VBQ0ksd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGtCQUFBO0FDQWhCO0FEQ2dCO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtBQ0NwQjtBREVZO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7QUNBaEI7QURDZ0I7RUFDSSx5QkFBQTtBQ0NwQjtBREVZO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNBaEI7QURHUztFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FDRGI7QURFYTtFQUNHLDBCQUFBO0VBQ0Esc0JBQUE7QUNBaEI7QURPQTtFQUlJLHFCQUFBO0FDUEo7QURJSTtFQUNJLGtCQUFBO0FDRlI7QURPQTtFQUNJLHFCQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi1wYWdlL2xvZ2luLXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5teWxvZ2luLXBhZ2V7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvbG9naW4uanBnJyk7IFxuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgLy9iYWNrZ3JvdW5kLXNpemU6MTAwJSAxMDAlO1xuICAgIC5sb2dpbi1jb2xvcntcbiAgICAgICAgaGVpZ2h0OjEwMCU7XG4gICAgICAgIC8vIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgxNjUsODQsMjE2LDAuMikgMCUsIHJnYmEoOTAsNTcsMTgzLDAuNCkgMTAwJSwgcmdiYSg0Niw2NSwxNzMsMC40KSAxMDAlKTtcbiAgICAgICAgLmxvZ2luLWhlYWRlcntcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6MThwdDtcbiAgICAgICAgICAgIGNvbG9yOiNmZmY7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDo1JTtcbiAgICAgICAgIH1cbiAgICAgICAgIC5jb250ZW50e1xuICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgICAgICAgICAuY2VudGVye1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIC5idXRue1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkZTYxNjE7IC8vIzViMzliN1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sb2dpbntcbiAgICAgICAgICAgICAgICBib3JkZXI6c29saWQgMXB4IGdyZXk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoyNXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDogbm9uZTtcbiAgICAgICAgICAgICAgICAuaWNvbi1jb2xvcntcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkZTYxNjEgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9yZ290LXBhc3N3b3Jke1xuICAgICAgICAgICAgICAgIGNvbG9yOiNmZmY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgICAgLnNpZ24tdXB7XG4gICAgICAgICAgICAgbWFyZ2luLXRvcDogLTM1JTtcbiAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICBmb250LXNpemU6MTJwdDtcbiAgICAgICAgICAgICBjb2xvcjojZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgLnNpZ24tdXAtYXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MTRwdCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGNvbG9yOiNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICAgICBcbiAgICB9XG59XG5cbi5yZWR7XG4gICAgaGVhZGVye1xuICAgICAgICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XG4gICAgfVxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuaW9uLWNvbHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59IiwiLm15bG9naW4tcGFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9sb2dpbi5qcGdcIik7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubXlsb2dpbi1wYWdlIC5sb2dpbi1jb2xvciB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5teWxvZ2luLXBhZ2UgLmxvZ2luLWNvbG9yIC5sb2dpbi1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHQ7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nLXRvcDogNSU7XG59XG4ubXlsb2dpbi1wYWdlIC5sb2dpbi1jb2xvciAuY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubXlsb2dpbi1wYWdlIC5sb2dpbi1jb2xvciAuY29udGVudCAuY2VudGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5teWxvZ2luLXBhZ2UgLmxvZ2luLWNvbG9yIC5jb250ZW50IC5jZW50ZXIgLmJ1dG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGU2MTYxO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuLm15bG9naW4tcGFnZSAubG9naW4tY29sb3IgLmNvbnRlbnQgLmxvZ2luIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JleTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDogbm9uZTtcbn1cbi5teWxvZ2luLXBhZ2UgLmxvZ2luLWNvbG9yIC5jb250ZW50IC5sb2dpbiAuaWNvbi1jb2xvciB7XG4gIGNvbG9yOiAjZGU2MTYxICFpbXBvcnRhbnQ7XG59XG4ubXlsb2dpbi1wYWdlIC5sb2dpbi1jb2xvciAuY29udGVudCAuZm9yZ290LXBhc3N3b3JkIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTJwdDtcbn1cbi5teWxvZ2luLXBhZ2UgLmxvZ2luLWNvbG9yIC5zaWduLXVwIHtcbiAgbWFyZ2luLXRvcDogLTM1JTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB0O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuLm15bG9naW4tcGFnZSAubG9naW4tY29sb3IgLnNpZ24tdXAgLnNpZ24tdXAtYSB7XG4gIGZvbnQtc2l6ZTogMTRwdCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4ucmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuLnJlZCBoZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XG59XG5cbmlvbi1jb2wge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59Il19 */"

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
    // Entry of Error modal 
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
    //Validate Input Email and password 
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
    // Login When Email Id And Password entered //Start
    login() {
        //  this.checkData();
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) { // Email String validator
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