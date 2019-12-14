(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["logo-logo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/logo/logo.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/logo/logo.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n    <img routerLink=\"/home\" class=\"img\" src=\"assets/logo.png\">\r\n</ion-content>"

/***/ }),

/***/ "./src/app/logo/logo.module.ts":
/*!*************************************!*\
  !*** ./src/app/logo/logo.module.ts ***!
  \*************************************/
/*! exports provided: LogoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoPageModule", function() { return LogoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _logo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logo.page */ "./src/app/logo/logo.page.ts");







var routes = [
    {
        path: '',
        component: _logo_page__WEBPACK_IMPORTED_MODULE_6__["LogoPage"]
    }
];
var LogoPageModule = /** @class */ (function () {
    function LogoPageModule() {
    }
    LogoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_logo_page__WEBPACK_IMPORTED_MODULE_6__["LogoPage"]]
        })
    ], LogoPageModule);
    return LogoPageModule;
}());



/***/ }),

/***/ "./src/app/logo/logo.page.scss":
/*!*************************************!*\
  !*** ./src/app/logo/logo.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img {\n  margin-bottom: 140px;\n  margin-top: 140px;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nby9EOlxcRG9jdW1lbnRzXFxFbnRyZWdhYmxlXFxpbGlvblxcZnJvbnRlbmQvc3JjXFxhcHBcXGxvZ29cXGxvZ28ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dvL2xvZ28ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9sb2dvL2xvZ28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNDBweDtcclxuICAgIG1hcmdpbi10b3A6IDE0MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSIsIi5pbWcge1xuICBtYXJnaW4tYm90dG9tOiAxNDBweDtcbiAgbWFyZ2luLXRvcDogMTQwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/logo/logo.page.ts":
/*!***********************************!*\
  !*** ./src/app/logo/logo.page.ts ***!
  \***********************************/
/*! exports provided: LogoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoPage", function() { return LogoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LogoPage = /** @class */ (function () {
    function LogoPage() {
    }
    LogoPage.prototype.ngOnInit = function () {
    };
    LogoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logo',
            template: __webpack_require__(/*! raw-loader!./logo.page.html */ "./node_modules/raw-loader/index.js!./src/app/logo/logo.page.html"),
            styles: [__webpack_require__(/*! ./logo.page.scss */ "./src/app/logo/logo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LogoPage);
    return LogoPage;
}());



/***/ })

}]);
//# sourceMappingURL=logo-logo-module-es5.js.map