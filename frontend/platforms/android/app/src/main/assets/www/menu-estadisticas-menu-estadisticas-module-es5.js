(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-estadisticas-menu-estadisticas-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/menu-estadisticas/menu-estadisticas.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/menu-estadisticas/menu-estadisticas.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/menu\"></ion-back-button>\n        </ion-buttons>\n        <ion-img class=\"img\" slot=\"start\"></ion-img>\n        <ion-title>\n            MENU ESTADISTICAS\n        </ion-title>\n        <ion-img class=\"img\" slot=\"end\"></ion-img>\n    </ion-toolbar>\n    <!-- <ion-toolbar color=\"secondary\" class=\"menu\"> -->\n    <span class=\"menu\" color=\"secondary\"></span>\n    <!-- </ion-toolbar> -->\n</ion-header>\n<ion-content>\n    <ion-card expand=\"full\" color=\"tertiary\" routerLink=\"/nutricion\">\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <ion-img class=\"imagen\" src=\"/assets/descarga.png\"></ion-img>\n                </ion-col>\n                <ion-col>\n                    <h1>Estado Nutricional</h1>\n                </ion-col>\n                <ion-col></ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-card>\n    <ion-card expand=\"full\" color=\"tertiary\" routerLink=\"/posicion\">\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <ion-img class=\"imagen\" src=\"/assets/poligono.png\"></ion-img>\n                </ion-col>\n                <ion-col>\n                    <h1>Posición Sugerida</h1>\n                </ion-col>\n                <ion-col></ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-card>\n</ion-content>\n<ion-footer>\n    <ion-button expand=\"full\" routerLink=\"/home\" color=\"primary\">CERRAR SESIÓN</ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/menu-estadisticas/menu-estadisticas.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/menu-estadisticas/menu-estadisticas.module.ts ***!
  \***************************************************************/
/*! exports provided: MenuEstadisticasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuEstadisticasPageModule", function() { return MenuEstadisticasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_estadisticas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-estadisticas.page */ "./src/app/menu-estadisticas/menu-estadisticas.page.ts");







var routes = [
    {
        path: '',
        component: _menu_estadisticas_page__WEBPACK_IMPORTED_MODULE_6__["MenuEstadisticasPage"]
    }
];
var MenuEstadisticasPageModule = /** @class */ (function () {
    function MenuEstadisticasPageModule() {
    }
    MenuEstadisticasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_menu_estadisticas_page__WEBPACK_IMPORTED_MODULE_6__["MenuEstadisticasPage"]]
        })
    ], MenuEstadisticasPageModule);
    return MenuEstadisticasPageModule;
}());



/***/ }),

/***/ "./src/app/menu-estadisticas/menu-estadisticas.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/menu-estadisticas/menu-estadisticas.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUtZXN0YWRpc3RpY2FzL21lbnUtZXN0YWRpc3RpY2FzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/menu-estadisticas/menu-estadisticas.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/menu-estadisticas/menu-estadisticas.page.ts ***!
  \*************************************************************/
/*! exports provided: MenuEstadisticasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuEstadisticasPage", function() { return MenuEstadisticasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuEstadisticasPage = /** @class */ (function () {
    function MenuEstadisticasPage() {
    }
    MenuEstadisticasPage.prototype.ngOnInit = function () {
    };
    MenuEstadisticasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu-estadisticas',
            template: __webpack_require__(/*! raw-loader!./menu-estadisticas.page.html */ "./node_modules/raw-loader/index.js!./src/app/menu-estadisticas/menu-estadisticas.page.html"),
            styles: [__webpack_require__(/*! ./menu-estadisticas.page.scss */ "./src/app/menu-estadisticas/menu-estadisticas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuEstadisticasPage);
    return MenuEstadisticasPage;
}());



/***/ })

}]);
//# sourceMappingURL=menu-estadisticas-menu-estadisticas-module-es5.js.map