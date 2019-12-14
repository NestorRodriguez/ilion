(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["posicion-posicion-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/posicion/posicion.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/posicion/posicion.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"REGRESAR\" defaultHref=\"/menu-estadisticas\"></ion-back-button>\n        </ion-buttons>\n        <ion-img class=\"img\" slot=\"start\"></ion-img>\n        <ion-title>\n            POSICIÓN\n        </ion-title>\n        <ion-img class=\"img\" slot=\"end\"></ion-img>\n    </ion-toolbar>\n    <!-- <ion-toolbar color=\"secondary\" class=\"menu\"> -->\n    <span class=\"menu\" color=\"secondary\"></span>\n    <!-- </ion-toolbar> -->\n</ion-header>\n\n<ion-content>\n    <form (ngSubmit)=\"Operacion(forma)\" #forma=\"ngForm\">\n\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <ion-item>\n                        <ion-label position=\"floating\">Velocidad</ion-label>\n                        <ion-input type=\"input\" required type=\"text\" [(ngModel)]=\"velocidad\" name=\"velocidad\"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-item>\n                        <ion-label position=\"floating\">Resistencia</ion-label>\n                        <ion-input type=\"input\" required type=\"text\" [(ngModel)]=\"resistencia\" name=\"resistencia\"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-item>\n                        <ion-label position=\"floating\">Fuerza</ion-label>\n                        <ion-input type=\"input\" required type=\"text\" [(ngModel)]=\"fuerza\" name=\"fuerza\"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-item>\n                        <ion-label position=\"floating\">Flexibilidad</ion-label>\n                        <ion-input type=\"input\" required type=\"text\" [(ngModel)]=\"flexibilidad\" name=\"flexibilidad\"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-button expand=\"block\" type=\"submit\" color=\"primary\">Evaluar</ion-button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </form>\n</ion-content>\n<ion-footer>\n    <ion-button expand=\"full\" routerLink=\"/home\" color=\"primary\">CERRAR SESIÓN</ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/posicion/posicion.module.ts":
/*!*********************************************!*\
  !*** ./src/app/posicion/posicion.module.ts ***!
  \*********************************************/
/*! exports provided: PosicionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosicionPageModule", function() { return PosicionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _posicion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./posicion.page */ "./src/app/posicion/posicion.page.ts");







var routes = [
    {
        path: '',
        component: _posicion_page__WEBPACK_IMPORTED_MODULE_6__["PosicionPage"]
    }
];
var PosicionPageModule = /** @class */ (function () {
    function PosicionPageModule() {
    }
    PosicionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_posicion_page__WEBPACK_IMPORTED_MODULE_6__["PosicionPage"]]
        })
    ], PosicionPageModule);
    return PosicionPageModule;
}());



/***/ }),

/***/ "./src/app/posicion/posicion.page.scss":
/*!*********************************************!*\
  !*** ./src/app/posicion/posicion.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc2ljaW9uL3Bvc2ljaW9uLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/posicion/posicion.page.ts":
/*!*******************************************!*\
  !*** ./src/app/posicion/posicion.page.ts ***!
  \*******************************************/
/*! exports provided: PosicionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosicionPage", function() { return PosicionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_ilion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/ilion.service */ "./src/app/servicios/ilion.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var PosicionPage = /** @class */ (function () {
    function PosicionPage(alertController, loadingCtrl, servicio, navControl, route) {
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.servicio = servicio;
        this.navControl = navControl;
        this.route = route;
    }
    PosicionPage.prototype.ngOnInit = function () {
        this.velocidad = '';
        this.fuerza = '';
        this.resistencia = '';
        this.flexibilidad = '';
    };
    PosicionPage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Error',
                            message: 'Por favor diligencie todos los campos para continuar',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        this.ngOnInit();
                        return [2 /*return*/];
                }
            });
        });
    };
    PosicionPage.prototype.presentinObeso = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Alerta',
                            message: 'Arquero',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        this.ngOnInit();
                        return [2 /*return*/];
                }
            });
        });
    };
    PosicionPage.prototype.presentinSobrepeso = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Alerta',
                            message: 'Defensa',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        this.ngOnInit();
                        return [2 /*return*/];
                }
            });
        });
    };
    PosicionPage.prototype.presentinNormal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Alerta',
                            message: 'Delantero',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        this.ngOnInit();
                        return [2 /*return*/];
                }
            });
        });
    };
    PosicionPage.prototype.presentinBajopeso = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Alerta',
                            message: 'Volante',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PosicionPage.prototype.Operacion = function (forma) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, mci;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!forma.valid) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Validando...',
                                spinner: 'bubbles'
                            })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        loading.dismiss();
                        mci = (this.flexibilidad + this.fuerza + this.resistencia + this.velocidad) / 4;
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
                        return [3 /*break*/, 3];
                    case 2:
                        this.presentAlert();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PosicionPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _servicios_ilion_service__WEBPACK_IMPORTED_MODULE_2__["ilionService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    PosicionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-posicion',
            template: __webpack_require__(/*! raw-loader!./posicion.page.html */ "./node_modules/raw-loader/index.js!./src/app/posicion/posicion.page.html"),
            styles: [__webpack_require__(/*! ./posicion.page.scss */ "./src/app/posicion/posicion.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _servicios_ilion_service__WEBPACK_IMPORTED_MODULE_2__["ilionService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PosicionPage);
    return PosicionPage;
}());



/***/ })

}]);
//# sourceMappingURL=posicion-posicion-module-es5.js.map