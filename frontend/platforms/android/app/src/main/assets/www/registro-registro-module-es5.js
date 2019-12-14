(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registro-registro-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/registro/registro.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/registro/registro.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"/home\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-img class=\"img\" slot=\"start\"></ion-img>\r\n        <ion-title>\r\n            REGISTRO\r\n        </ion-title>\r\n        <ion-img class=\"img\" slot=\"end\"></ion-img>\r\n    </ion-toolbar>\r\n    <!-- <ion-toolbar color=\"secondary\" class=\"menu\"> -->\r\n    <span class=\"menu\" color=\"secondary\"></span>\r\n    <!-- </ion-toolbar> -->\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-card align-items-center>\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Nombre Completo: </ion-label>\r\n                        <ion-input type=\"input\" required type=\"text\" [(ngModel)]=\"nombre\" name=\"nombre\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Email</ion-label>\r\n                        <ion-input type=\"email\" required type=\"email\" [(ngModel)]=\"email\" name=\"email\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label>Tipo de Documento</ion-label>\r\n                        <ion-select [(ngModel)]=\"id_ident\" placeholder=\"Seleccione una\">\r\n                            <ion-select-option value=\"1\">Cedula</ion-select-option>\r\n                            <ion-select-option value=\"2\">Tarjeta Identidad</ion-select-option>\r\n                            <ion-select-option value=\"3\">Cedula Extranjeria</ion-select-option>\r\n                        </ion-select>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Documento</ion-label>\r\n                        <ion-input type=\"input\" required type=\"text\" [(ngModel)]=\"num_ident\" name=\"num_ident\">\r\n                        </ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Contraseña</ion-label>\r\n                        <ion-input type=\"input\" required type=\"password\" [(ngModel)]=\"password\" name=\"password\">\r\n                        </ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-button expand=\"block\" type=\"submit\" color=\"primary\" (click)=\"saveForm()\">Registrar</ion-button>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-card>\r\n</ion-content>\r\n<ion-footer>\r\n    <ion-button expand=\"full\" color=\"primary\">CERRAR SESIÓN</ion-button>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/registro/registro.module.ts":
/*!*********************************************!*\
  !*** ./src/app/registro/registro.module.ts ***!
  \*********************************************/
/*! exports provided: RegistroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function() { return RegistroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro.page */ "./src/app/registro/registro.page.ts");







var routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPage"]
    }
];
var RegistroPageModule = /** @class */ (function () {
    function RegistroPageModule() {
    }
    RegistroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPage"]]
        })
    ], RegistroPageModule);
    return RegistroPageModule;
}());



/***/ }),

/***/ "./src/app/registro/registro.page.scss":
/*!*********************************************!*\
  !*** ./src/app/registro/registro.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJvL3JlZ2lzdHJvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/registro/registro.page.ts":
/*!*******************************************!*\
  !*** ./src/app/registro/registro.page.ts ***!
  \*******************************************/
/*! exports provided: RegistroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPage", function() { return RegistroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_ilion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/ilion.service */ "./src/app/servicios/ilion.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var RegistroPage = /** @class */ (function () {
    function RegistroPage(servicio, alertController, loadingCtrl, navControl) {
        this.servicio = servicio;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.navControl = navControl;
        this.id_rol = '1';
    }
    RegistroPage.prototype.ngOnInit = function () {
        this.nombre = '';
        this.email = '';
        this.id_ident = '';
        this.num_ident = '';
        this.password = '';
        this.id_rol = '';
    };
    RegistroPage.prototype.saveForm = function () {
        var _this = this;
        var data = {
            nombre: this.nombre,
            email: this.email,
            id_ident: this.id_ident,
            num_ident: this.num_ident,
            contraseña: this.password,
            id_rol: this.id_rol
        };
        console.log(data);
        this.servicio.setUsuario(data)
            .subscribe(function (response) {
            console.log(response);
            var json = JSON.parse(JSON.stringify(response));
            _this.resultado = json.contenido.Post_usuario.Error;
            if (_this.resultado === 'Se agrego Exitosamente') {
                _this.presentAlertExito();
                _this.navControl.navigateRoot('home');
            }
            else {
                _this.presentAlertError();
                _this.ngOnInit();
            }
        }, function (error) { return console.log(error); });
    };
    RegistroPage.prototype.presentAlertExito = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Exito',
                            message: 'Se agrego Exitosamente',
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
    RegistroPage.prototype.presentAlertError = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Error',
                            message: 'Validar los datos ingresados',
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
    RegistroPage.ctorParameters = function () { return [
        { type: _servicios_ilion_service__WEBPACK_IMPORTED_MODULE_2__["ilionService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
    ]; };
    RegistroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registro',
            template: __webpack_require__(/*! raw-loader!./registro.page.html */ "./node_modules/raw-loader/index.js!./src/app/registro/registro.page.html"),
            styles: [__webpack_require__(/*! ./registro.page.scss */ "./src/app/registro/registro.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_ilion_service__WEBPACK_IMPORTED_MODULE_2__["ilionService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], RegistroPage);
    return RegistroPage;
}());



/***/ })

}]);
//# sourceMappingURL=registro-registro-module-es5.js.map