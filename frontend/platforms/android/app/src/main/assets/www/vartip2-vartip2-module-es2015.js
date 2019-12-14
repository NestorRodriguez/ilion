(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vartip2-vartip2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/vartip2/vartip2.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vartip2/vartip2.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"primary\" class=\"title\">\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-title>ESTADÍSTICAS DEPORTIVAS</ion-title>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-img></ion-img>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <hr>\r\n    <hr>\r\n    <ion-title class=\"text\">INGRESE VARIABLES TIPO 2</ion-title>\r\n    <hr>\r\n    <hr>\r\n    <ion-card align-items-center>\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">EDAD</ion-label>\r\n                        <ion-input type=\"input\" ngModel name=\"email\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">SEXO</ion-label>\r\n                        <ion-input type=\"email\" ngModel name=\"email\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">ESTRATO SOCIOECONÓMICO</ion-label>\r\n                        <ion-input type=\"numeric\" ngModel name=\"email\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">FRECUENCIA DE ENTRENAMIENTO</ion-label>\r\n                        <ion-input type=\"input\" ngModel name=\"email\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-card>\r\n</ion-content>\r\n<ion-footer>\r\n    <ion-button expand=\"full\" color=\"primary\">GUARDAR</ion-button>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/vartip2/vartip2.module.ts":
/*!*******************************************!*\
  !*** ./src/app/vartip2/vartip2.module.ts ***!
  \*******************************************/
/*! exports provided: Vartip2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vartip2PageModule", function() { return Vartip2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vartip2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vartip2.page */ "./src/app/vartip2/vartip2.page.ts");







const routes = [
    {
        path: '',
        component: _vartip2_page__WEBPACK_IMPORTED_MODULE_6__["Vartip2Page"]
    }
];
let Vartip2PageModule = class Vartip2PageModule {
};
Vartip2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_vartip2_page__WEBPACK_IMPORTED_MODULE_6__["Vartip2Page"]]
    })
], Vartip2PageModule);



/***/ }),

/***/ "./src/app/vartip2/vartip2.page.scss":
/*!*******************************************!*\
  !*** ./src/app/vartip2/vartip2.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmFydGlwMi9EOlxcRG9jdW1lbnRzXFxFbnRyZWdhYmxlXFxpbGlvblxcZnJvbnRlbmQvc3JjXFxhcHBcXHZhcnRpcDJcXHZhcnRpcDIucGFnZS5zY3NzIiwic3JjL2FwcC92YXJ0aXAyL3ZhcnRpcDIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3ZhcnRpcDIvdmFydGlwMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iLCIudGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/vartip2/vartip2.page.ts":
/*!*****************************************!*\
  !*** ./src/app/vartip2/vartip2.page.ts ***!
  \*****************************************/
/*! exports provided: Vartip2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vartip2Page", function() { return Vartip2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Vartip2Page = class Vartip2Page {
    constructor() { }
    ngOnInit() {
    }
};
Vartip2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vartip2',
        template: __webpack_require__(/*! raw-loader!./vartip2.page.html */ "./node_modules/raw-loader/index.js!./src/app/vartip2/vartip2.page.html"),
        styles: [__webpack_require__(/*! ./vartip2.page.scss */ "./src/app/vartip2/vartip2.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Vartip2Page);



/***/ })

}]);
//# sourceMappingURL=vartip2-vartip2-module-es2015.js.map