(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagos-pagos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pagos/pagos.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pagos/pagos.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"Regresar\" defaultHref=\"/menu\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-img class=\"img\" slot=\"start\"></ion-img>\r\n        <ion-title>\r\n            PAGOS\r\n        </ion-title>\r\n        <ion-img class=\"img\" slot=\"end\"></ion-img>\r\n    </ion-toolbar>\r\n    <!-- <ion-toolbar color=\"secondary\" class=\"menu\"> -->\r\n    <span class=\"menu\" color=\"secondary\"></span>\r\n    <!-- </ion-toolbar> -->\r\n</ion-header>\r\n<ion-card-content class=\"imagen\" (click)=\"abrirDaviPlata()\">\r\n    <ion-item>\r\n        <img src=\"/assets/daviplata.png\">\r\n    </ion-item>\r\n</ion-card-content>\r\n<ion-card-content class=\"imagen\" (click)=\"abrirNequi()\">\r\n    <ion-item>\r\n        <img src=\"/assets/nequi.jpg \">\r\n    </ion-item>\r\n</ion-card-content>\r\n<ion-card-content class=\"imagen \">\r\n    <ion-item>\r\n        <img src=\"/assets/paypal.jpg \">\r\n    </ion-item>\r\n</ion-card-content>\r\n<ion-footer>\r\n    <ion-button expand=\"full\" routerLink=\"/home\" color=\"primary\">CERRAR SESIÓN</ion-button>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/pagos/pagos.module.ts":
/*!***************************************!*\
  !*** ./src/app/pagos/pagos.module.ts ***!
  \***************************************/
/*! exports provided: PagosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagosPageModule", function() { return PagosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pagos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pagos.page */ "./src/app/pagos/pagos.page.ts");







const routes = [
    {
        path: '',
        component: _pagos_page__WEBPACK_IMPORTED_MODULE_6__["PagosPage"]
    }
];
let PagosPageModule = class PagosPageModule {
};
PagosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_pagos_page__WEBPACK_IMPORTED_MODULE_6__["PagosPage"]]
    })
], PagosPageModule);



/***/ }),

/***/ "./src/app/pagos/pagos.page.scss":
/*!***************************************!*\
  !*** ./src/app/pagos/pagos.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imagen {\n  width: 350px;\n  height: 300px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnb3MvRDpcXERvY3VtZW50c1xcRW50cmVnYWJsZVxcaWxpb25cXGZyb250ZW5kL3NyY1xcYXBwXFxwYWdvc1xccGFnb3MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdvcy9wYWdvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ29zL3BhZ29zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZW4ge1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICA7XHJcbn0iLCIuaW1hZ2VuIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pagos/pagos.page.ts":
/*!*************************************!*\
  !*** ./src/app/pagos/pagos.page.ts ***!
  \*************************************/
/*! exports provided: PagosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagosPage", function() { return PagosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PagosPage = class PagosPage {
    constructor() {
        this.enlace = '';
    }
    ngOnInit() {
    }
    // tslint:disable-next-line: only-arrow-functions
    abrirNequi() {
        window.open('https://recarga.nequi.com.co/bdigitalpsl/#!/', '_system', 'location=yes');
    }
    abrirDaviPlata() {
        window.open('https://www.psepagos.co/PSEHostingUI/ShowTicketOffice.aspx?ID=2508', '_system', 'location=yes');
    }
};
PagosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pagos',
        template: __webpack_require__(/*! raw-loader!./pagos.page.html */ "./node_modules/raw-loader/index.js!./src/app/pagos/pagos.page.html"),
        styles: [__webpack_require__(/*! ./pagos.page.scss */ "./src/app/pagos/pagos.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PagosPage);



/***/ })

}]);
//# sourceMappingURL=pagos-pagos-module-es2015.js.map