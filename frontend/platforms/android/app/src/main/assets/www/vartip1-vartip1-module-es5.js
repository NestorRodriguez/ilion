(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vartip1-vartip1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/vartip1/vartip1.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vartip1/vartip1.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"primary\" class=\"title\">\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-title>ESTADÍSTICAS DEPORTIVAS</ion-title>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-img></ion-img>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <hr>\r\n    <hr>\r\n    <ion-title class=\"text\">INGRESE VARIABLES TIPO 1</ion-title>\r\n    <hr>\r\n    <hr>\r\n    <ion-card align-items-center>\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">VELOCIDAD</ion-label>\r\n                        <ion-input type=\"input\" ngModel name=\"email\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">FUERZA</ion-label>\r\n                        <ion-input type=\"email\" ngModel name=\"email\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">AGILIDAD</ion-label>\r\n                        <ion-input type=\"numeric\" ngModel name=\"email\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">PESO</ion-label>\r\n                        <ion-input type=\"input\" ngModel name=\"email\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">TALLA</ion-label>\r\n                        <ion-input type=\"input\" ngModel name=\"email\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">ICM</ion-label>\r\n                        <ion-input type=\"input\" ngModel name=\"email\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">PORCENTAJE GRASA</ion-label>\r\n                        <ion-input type=\"input\" ngModel name=\"email\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-card>\r\n</ion-content>\r\n<ion-footer>\r\n    <ion-button expand=\"full\" color=\"primary\">GUARDAR</ion-button>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/vartip1/vartip1.module.ts":
/*!*******************************************!*\
  !*** ./src/app/vartip1/vartip1.module.ts ***!
  \*******************************************/
/*! exports provided: Vartip1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vartip1PageModule", function() { return Vartip1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vartip1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vartip1.page */ "./src/app/vartip1/vartip1.page.ts");







var routes = [
    {
        path: '',
        component: _vartip1_page__WEBPACK_IMPORTED_MODULE_6__["Vartip1Page"]
    }
];
var Vartip1PageModule = /** @class */ (function () {
    function Vartip1PageModule() {
    }
    Vartip1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_vartip1_page__WEBPACK_IMPORTED_MODULE_6__["Vartip1Page"]]
        })
    ], Vartip1PageModule);
    return Vartip1PageModule;
}());



/***/ }),

/***/ "./src/app/vartip1/vartip1.page.scss":
/*!*******************************************!*\
  !*** ./src/app/vartip1/vartip1.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmFydGlwMS9EOlxcRG9jdW1lbnRzXFxFbnRyZWdhYmxlXFxpbGlvblxcZnJvbnRlbmQvc3JjXFxhcHBcXHZhcnRpcDFcXHZhcnRpcDEucGFnZS5zY3NzIiwic3JjL2FwcC92YXJ0aXAxL3ZhcnRpcDEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFJO0VBQ0ksa0JBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL3ZhcnRpcDEvdmFydGlwMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgLnRleHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH0iLCIudGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/vartip1/vartip1.page.ts":
/*!*****************************************!*\
  !*** ./src/app/vartip1/vartip1.page.ts ***!
  \*****************************************/
/*! exports provided: Vartip1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vartip1Page", function() { return Vartip1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Vartip1Page = /** @class */ (function () {
    function Vartip1Page() {
    }
    Vartip1Page.prototype.ngOnInit = function () {
    };
    Vartip1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vartip1',
            template: __webpack_require__(/*! raw-loader!./vartip1.page.html */ "./node_modules/raw-loader/index.js!./src/app/vartip1/vartip1.page.html"),
            styles: [__webpack_require__(/*! ./vartip1.page.scss */ "./src/app/vartip1/vartip1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Vartip1Page);
    return Vartip1Page;
}());



/***/ })

}]);
//# sourceMappingURL=vartip1-vartip1-module-es5.js.map