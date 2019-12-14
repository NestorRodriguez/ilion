(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/menu/menu.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/menu/menu.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-img class=\"img\" slot=\"start\"></ion-img>\r\n        <ion-title>\r\n            MENU\r\n        </ion-title>\r\n        <ion-img class=\"img\" slot=\"end\"></ion-img>\r\n    </ion-toolbar>\r\n    <!-- <ion-toolbar color=\"secondary\" class=\"menu\"> -->\r\n    <span class=\"menu\" color=\"secondary\"></span>\r\n    <!-- </ion-toolbar> -->\r\n</ion-header>\r\n<ion-content>\r\n    <ion-card expand=\"full\" color=\"tertiary\" routerLink=\"/pagos\">\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-img class=\"imagen\" src=\"/assets/logopago.PNG\"></ion-img>\r\n                </ion-col>\r\n                <ion-col>\r\n                    <h3>PAGO EN LINEA</h3>\r\n                </ion-col>\r\n                <ion-col></ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-card>\r\n    <ion-card expand=\"full\" color=\"tertiary\" routerLink=\"/menu-inscipcion\">\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-img class=\"imagen\" src=\"/assets/logoinscrip.PNG\"></ion-img>\r\n                </ion-col>\r\n                <ion-col>\r\n                    <h3>INSCRIPCIÓN</h3>\r\n                </ion-col>\r\n                <ion-col></ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-card>\r\n    <ion-card expand=\"full\" color=\"tertiary\" routerLink=\"/menu-estadisticas\">\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-img class=\"imagen\" src=\"/assets/logoest.PNG\"></ion-img>\r\n                </ion-col>\r\n                <ion-col>\r\n                    <h3>ESTADISTICAS DEPORTIVAS</h3>\r\n                </ion-col>\r\n                <ion-col></ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-card>\r\n    <ion-card expand=\"full\" color=\"tertiary\" routerLink=\"/calendar\">\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-img class=\"imagen\" src=\"/assets/logocand.PNG\"></ion-img>\r\n                </ion-col>\r\n                <ion-col>\r\n                    <h3>CALENDARIO DE EVENTOS</h3>\r\n                </ion-col>\r\n                <ion-col></ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-card>\r\n</ion-content>\r\n<ion-footer>\r\n    <ion-button expand=\"full\" routerLink=\"/home\" color=\"primary\">CERRAR SESIÓN</ion-button>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/menu/menu.module.ts":
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "./src/app/menu/menu.page.ts");







var routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]
    }
];
var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
        })
    ], MenuPageModule);
    return MenuPageModule;
}());



/***/ }),

/***/ "./src/app/menu/menu.page.scss":
/*!*************************************!*\
  !*** ./src/app/menu/menu.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu {\n  width: 407px;\n  height: 100px;\n}\n\n.imagen {\n  width: 80px;\n  height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9EOlxcRG9jdW1lbnRzXFxFbnRyZWdhYmxlXFxpbGlvblxcZnJvbnRlbmQvc3JjXFxhcHBcXG1lbnVcXG1lbnUucGFnZS5zY3NzIiwic3JjL2FwcC9tZW51L21lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNDUjs7QURHSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIC5tZW51IHtcclxuICAgICAgICB3aWR0aDogNDA3cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5pbWFnZW4ge1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgIH0iLCIubWVudSB7XG4gIHdpZHRoOiA0MDdweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmltYWdlbiB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/menu/menu.page.ts":
/*!***********************************!*\
  !*** ./src/app/menu/menu.page.ts ***!
  \***********************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuPage = /** @class */ (function () {
    function MenuPage() {
    }
    MenuPage.prototype.ngOnInit = function () {
    };
    MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! raw-loader!./menu.page.html */ "./node_modules/raw-loader/index.js!./src/app/menu/menu.page.html"),
            styles: [__webpack_require__(/*! ./menu.page.scss */ "./src/app/menu/menu.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuPage);
    return MenuPage;
}());



/***/ })

}]);
//# sourceMappingURL=menu-menu-module-es5.js.map