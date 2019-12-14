(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["msjanalisis-msjanalisis-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/msjanalisis/msjanalisis.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/msjanalisis/msjanalisis.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\r\n    <ion-text color=\"dark\" class=\"text\">\r\n        <img src=\"/assets/soccer.png\" class=\"imagen\">\r\n        <h1>REALIZANDO ANALISIS...</h1>\r\n    </ion-text>\r\n</div>"

/***/ }),

/***/ "./src/app/msjanalisis/msjanalisis.module.ts":
/*!***************************************************!*\
  !*** ./src/app/msjanalisis/msjanalisis.module.ts ***!
  \***************************************************/
/*! exports provided: MsjanalisisPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsjanalisisPageModule", function() { return MsjanalisisPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _msjanalisis_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./msjanalisis.page */ "./src/app/msjanalisis/msjanalisis.page.ts");







const routes = [
    {
        path: '',
        component: _msjanalisis_page__WEBPACK_IMPORTED_MODULE_6__["MsjanalisisPage"]
    }
];
let MsjanalisisPageModule = class MsjanalisisPageModule {
};
MsjanalisisPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_msjanalisis_page__WEBPACK_IMPORTED_MODULE_6__["MsjanalisisPage"]]
    })
], MsjanalisisPageModule);



/***/ }),

/***/ "./src/app/msjanalisis/msjanalisis.page.scss":
/*!***************************************************!*\
  !*** ./src/app/msjanalisis/msjanalisis.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  text-align: center;\n}\n\n.imagen {\n  width: 350px;\n  height: 300px;\n}\n\n.center {\n  display: block;\n  margin: auto;\n  width: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXNqYW5hbGlzaXMvRDpcXERvY3VtZW50c1xcRW50cmVnYWJsZVxcaWxpb25cXGZyb250ZW5kL3NyY1xcYXBwXFxtc2phbmFsaXNpc1xcbXNqYW5hbGlzaXMucGFnZS5zY3NzIiwic3JjL2FwcC9tc2phbmFsaXNpcy9tc2phbmFsaXNpcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbXNqYW5hbGlzaXMvbXNqYW5hbGlzaXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW1hZ2VuIHtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogNzAlO1xyXG59IiwiLnRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWFnZW4ge1xuICB3aWR0aDogMzUwcHg7XG4gIGhlaWdodDogMzAwcHg7XG59XG5cbi5jZW50ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNzAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/msjanalisis/msjanalisis.page.ts":
/*!*************************************************!*\
  !*** ./src/app/msjanalisis/msjanalisis.page.ts ***!
  \*************************************************/
/*! exports provided: MsjanalisisPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsjanalisisPage", function() { return MsjanalisisPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MsjanalisisPage = class MsjanalisisPage {
    constructor() { }
    ngOnInit() {
    }
};
MsjanalisisPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-msjanalisis',
        template: __webpack_require__(/*! raw-loader!./msjanalisis.page.html */ "./node_modules/raw-loader/index.js!./src/app/msjanalisis/msjanalisis.page.html"),
        styles: [__webpack_require__(/*! ./msjanalisis.page.scss */ "./src/app/msjanalisis/msjanalisis.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MsjanalisisPage);



/***/ })

}]);
//# sourceMappingURL=msjanalisis-msjanalisis-module-es2015.js.map