(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nutricion-nutricion-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/nutricion/nutricion.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nutricion/nutricion.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/menu-estadisticas\"></ion-back-button>\n        </ion-buttons>\n        <ion-img class=\"img\" slot=\"start\"></ion-img>\n        <ion-title>\n            CALCULADORA DEL IMC\n        </ion-title>\n        <ion-img class=\"img\" slot=\"end\"></ion-img>\n    </ion-toolbar>\n    <!-- <ion-toolbar color=\"secondary\" class=\"menu\"> -->\n    <span class=\"menu\" color=\"secondary\"></span>\n    <!-- </ion-toolbar> -->\n</ion-header>\n<ion-content>\n    <form (ngSubmit)=\"Operacion(forma)\" #forma=\"ngForm\">\n\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <ion-item>\n                        <ion-label position=\"floating\">Estatura : Metros</ion-label>\n                        <ion-input type=\"input\" required type=\"text\" [(ngModel)]=\"estatura\" name=\"estatura\"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-item>\n                        <ion-label position=\"floating\">Peso : Kilogramos:</ion-label>\n                        <ion-input type=\"input\" required type=\"text\" [(ngModel)]=\"peso\" name=\"peso\"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-button expand=\"block\" type=\"submit\" color=\"primary\">Evaluar</ion-button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </form>\n</ion-content>\n<ion-footer>\n    <ion-button expand=\"full\" routerLink=\"/home\" color=\"primary\">CERRAR SESIÓN</ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/nutricion/nutricion.module.ts":
/*!***********************************************!*\
  !*** ./src/app/nutricion/nutricion.module.ts ***!
  \***********************************************/
/*! exports provided: NutricionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NutricionPageModule", function() { return NutricionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _nutricion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nutricion.page */ "./src/app/nutricion/nutricion.page.ts");







const routes = [
    {
        path: '',
        component: _nutricion_page__WEBPACK_IMPORTED_MODULE_6__["NutricionPage"]
    }
];
let NutricionPageModule = class NutricionPageModule {
};
NutricionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_nutricion_page__WEBPACK_IMPORTED_MODULE_6__["NutricionPage"]]
    })
], NutricionPageModule);



/***/ }),

/***/ "./src/app/nutricion/nutricion.page.scss":
/*!***********************************************!*\
  !*** ./src/app/nutricion/nutricion.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL251dHJpY2lvbi9udXRyaWNpb24ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/nutricion/nutricion.page.ts":
/*!*********************************************!*\
  !*** ./src/app/nutricion/nutricion.page.ts ***!
  \*********************************************/
/*! exports provided: NutricionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NutricionPage", function() { return NutricionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _servicios_ilion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/ilion.service */ "./src/app/servicios/ilion.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let NutricionPage = class NutricionPage {
    constructor(alertController, loadingCtrl, servicio, navControl, route) {
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.servicio = servicio;
        this.navControl = navControl;
        this.route = route;
    }
    ngOnInit() {
        this.peso = '';
        this.estatura = '';
    }
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Error',
                message: 'Por favor diligencie todos los campos para continuar',
                buttons: ['OK']
            });
            yield alert.present();
            this.ngOnInit();
        });
    }
    presentinObeso() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alerta',
                message: 'Nivel de peso Obeso',
                buttons: ['OK']
            });
            yield alert.present();
            this.ngOnInit();
        });
    }
    presentinSobrepeso() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alerta',
                message: 'Nivel de peso Sobre Peso',
                buttons: ['OK']
            });
            yield alert.present();
            this.ngOnInit();
        });
    }
    presentinNormal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alerta',
                message: 'Nivel de peso Normal',
                buttons: ['OK']
            });
            yield alert.present();
            this.ngOnInit();
        });
    }
    presentinBajopeso() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alerta',
                message: 'Nivel de peso Bajo Peso',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    Operacion(forma) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (forma.valid) {
                const loading = yield this.loadingCtrl.create({
                    message: 'Validando...',
                    spinner: 'bubbles'
                });
                loading.present();
                loading.dismiss();
                // tslint:disable-next-line: no-unused-expression
                const mci = this.peso / Math.pow(this.estatura, 2);
                if (mci > 18.5) {
                    if (mci >= 25) {
                        if (mci >= 30) {
                            this.presentinObeso();
                        }
                        else {
                            this.presentinSobrepeso();
                        }
                    }
                    else {
                        this.presentinNormal();
                    }
                }
                else {
                    this.presentinBajopeso();
                }
                console.log(mci);
            }
            else {
                this.presentAlert();
            }
        });
    }
};
NutricionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _servicios_ilion_service__WEBPACK_IMPORTED_MODULE_2__["ilionService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
NutricionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nutricion',
        template: __webpack_require__(/*! raw-loader!./nutricion.page.html */ "./node_modules/raw-loader/index.js!./src/app/nutricion/nutricion.page.html"),
        styles: [__webpack_require__(/*! ./nutricion.page.scss */ "./src/app/nutricion/nutricion.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _servicios_ilion_service__WEBPACK_IMPORTED_MODULE_2__["ilionService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], NutricionPage);



/***/ })

}]);
//# sourceMappingURL=nutricion-nutricion-module-es2015.js.map