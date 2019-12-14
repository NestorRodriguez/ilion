(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-inscipcion-menu-inscipcion-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/menu-inscipcion/menu-inscipcion.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/menu-inscipcion/menu-inscipcion.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"REGRESAR\" defaultHref=\"/menu\"></ion-back-button>\n        </ion-buttons>\n        <ion-img class=\"img\" slot=\"start\"></ion-img>\n        <ion-title>\n            INSCRITOS\n        </ion-title>\n        <ion-img class=\"img\" slot=\"end\"></ion-img>\n    </ion-toolbar>\n    <!-- <ion-toolbar color=\"secondary\" class=\"menu\"> -->\n    <span class=\"menu\" color=\"secondary\"></span>\n    <!-- </ion-toolbar> -->\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n        <ion-row>\n            <ion-col></ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col></ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col></ion-col>\n            <ion-col>\n                <ion-button (click)=\"saveForm()\">\n                    Inscripción Nueva\n                </ion-button>\n            </ion-col>\n            <ion-col></ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n\n                <ion-item-sliding *ngFor='let estado of estadoActual'>\n                    <ion-item-options side=\"start\">\n                        <ion-item-option color=\"danger\" (click)=\"deleteForm(estado.id_jugador)\">Eliminar\n                        </ion-item-option>\n                    </ion-item-options>\n                    <ion-item>\n                        <ion-label>\n                            {{estado.nombre_jugaro}}\n                        </ion-label>\n                    </ion-item>\n                    <ion-item-options side=\"end\">\n                        <ion-item-option (click)=\"editForm(estado.id_jugador)\">Editar\n                        </ion-item-option>\n                    </ion-item-options>\n                </ion-item-sliding>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/menu-inscipcion/menu-inscipcion.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/menu-inscipcion/menu-inscipcion.module.ts ***!
  \***********************************************************/
/*! exports provided: MenuInscipcionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuInscipcionPageModule", function() { return MenuInscipcionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_inscipcion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-inscipcion.page */ "./src/app/menu-inscipcion/menu-inscipcion.page.ts");







const routes = [
    {
        path: '',
        component: _menu_inscipcion_page__WEBPACK_IMPORTED_MODULE_6__["MenuInscipcionPage"]
    }
];
let MenuInscipcionPageModule = class MenuInscipcionPageModule {
};
MenuInscipcionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_menu_inscipcion_page__WEBPACK_IMPORTED_MODULE_6__["MenuInscipcionPage"]]
    })
], MenuInscipcionPageModule);



/***/ }),

/***/ "./src/app/menu-inscipcion/menu-inscipcion.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/menu-inscipcion/menu-inscipcion.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUtaW5zY2lwY2lvbi9tZW51LWluc2NpcGNpb24ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/menu-inscipcion/menu-inscipcion.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/menu-inscipcion/menu-inscipcion.page.ts ***!
  \*********************************************************/
/*! exports provided: MenuInscipcionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuInscipcionPage", function() { return MenuInscipcionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _servicios_ilion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servicios/ilion.service */ "./src/app/servicios/ilion.service.ts");





let MenuInscipcionPage = class MenuInscipcionPage {
    constructor(navControl, route, servicio) {
        this.navControl = navControl;
        this.route = route;
        this.servicio = servicio;
        this.estadoActual = [];
        this.errorMessage = '';
    }
    ngOnInit() {
        this.getEstadoActual();
    }
    getEstadoActual() {
        this.servicio.getDatos_jugador().subscribe(estadoActual => {
            console.log(estadoActual);
            let json = JSON.parse(JSON.stringify(estadoActual));
            this.estadoActual = json.contenido.Get_datos_jugaro;
        }, error => this.errorMessage = error);
    }
    editForm(id) {
        this.navControl.navigateForward(`incripcion-details/${id}`);
        this.ngOnInit();
    }
    deleteForm(id) {
        this.id = id;
        this.servicio.deleteDatos_jugador(id).subscribe(response => {
            this.ngOnInit();
            console.log(response);
        });
    }
    saveForm() {
        this.navControl.navigateRoot('/inscripcion');
    }
};
MenuInscipcionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _servicios_ilion_service__WEBPACK_IMPORTED_MODULE_4__["ilionService"] }
];
MenuInscipcionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-inscipcion',
        template: __webpack_require__(/*! raw-loader!./menu-inscipcion.page.html */ "./node_modules/raw-loader/index.js!./src/app/menu-inscipcion/menu-inscipcion.page.html"),
        styles: [__webpack_require__(/*! ./menu-inscipcion.page.scss */ "./src/app/menu-inscipcion/menu-inscipcion.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _servicios_ilion_service__WEBPACK_IMPORTED_MODULE_4__["ilionService"]])
], MenuInscipcionPage);



/***/ })

}]);
//# sourceMappingURL=menu-inscipcion-menu-inscipcion-module-es2015.js.map