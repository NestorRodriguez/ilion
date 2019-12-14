(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inscripcion-inscripcion-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/inscripcion/inscripcion.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/inscripcion/inscripcion.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"Regresar\" defaultHref=\"/menu\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-img class=\"img\" slot=\"start\"></ion-img>\r\n        <ion-title>\r\n            INSCRIPCIÓN\r\n        </ion-title>\r\n        <ion-img class=\"img\" slot=\"end\"></ion-img>\r\n    </ion-toolbar>\r\n    <!-- <ion-toolbar color=\"secondary\" class=\"menu\"> -->\r\n    <span class=\"menu\" color=\"secondary\"></span>\r\n    <!-- </ion-toolbar> -->\r\n</ion-header>\r\n<ion-content>\r\n    <ion-card align-items-center>\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Nombre Completo: </ion-label>\r\n                        <ion-input type=\"input\" required type=\"text\" [(ngModel)]=\"nombre_jugaro\" name=\"nombre\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Fecha Nacimiento: </ion-label>\r\n                        <ion-input type=\"email\" required type=\"email\" [(ngModel)]=\"fecha_nacimiento\" name=\"fecha_nacimiento\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Lugar de Nacimiento: </ion-label>\r\n                        <ion-input type=\"email\" required type=\"email\" [(ngModel)]=\"lugar\" name=\"lugar\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label>Tipo de Documento</ion-label>\r\n                        <ion-select [(ngModel)]=\"tipo_documento\" placeholder=\"Seleccione una\">\r\n                            <ion-select-option value=\"1\">Cedula</ion-select-option>\r\n                            <ion-select-option value=\"2\">Tarjeta Identidad</ion-select-option>\r\n                            <ion-select-option value=\"3\">Cedula Extranjeria</ion-select-option>\r\n                        </ion-select>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Documento: </ion-label>\r\n                        <ion-input type=\"input\" required type=\"text\" [(ngModel)]=\"documento_identidad\" name=\"documento_identidad\">\r\n                        </ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label>Genero: </ion-label>\r\n                        <ion-select [(ngModel)]=\"genero\" placeholder=\"Seleccione una\">\r\n                            <ion-select-option value=\"Masculino\">Masculino</ion-select-option>\r\n                            <ion-select-option value=\"Femenino\">Femenino</ion-select-option>\r\n                        </ion-select>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Dirección: </ion-label>\r\n                        <ion-input type=\"input\" required type=\"text\" [(ngModel)]=\"direccion_residencia\" name=\"direccion_residencia\">\r\n                        </ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Barrio: </ion-label>\r\n                        <ion-input type=\"input\" required type=\"text\" [(ngModel)]=\"barrio\" name=\"barrio\">\r\n                        </ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Telefono: </ion-label>\r\n                        <ion-input type=\"input\" required type=\"text\" [(ngModel)]=\"telefono\" name=\"telefono\">\r\n                        </ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Celular: </ion-label>\r\n                        <ion-input type=\"input\" required type=\"text\" [(ngModel)]=\"celular\" name=\"celular\">\r\n                        </ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Correo: </ion-label>\r\n                        <ion-input type=\"input\" required type=\"text\" [(ngModel)]=\"email\" name=\"email\">\r\n                        </ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Whatsapp: </ion-label>\r\n                        <ion-input type=\"input\" required type=\"text\" [(ngModel)]=\"whatsapp\" name=\"whatsapp\">\r\n                        </ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Edad: </ion-label>\r\n                        <ion-input type=\"input\" required type=\"text\" [(ngModel)]=\"edad\" name=\"edad\">\r\n                        </ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Peso: </ion-label>\r\n                        <ion-input type=\"input\" required type=\"text\" [(ngModel)]=\"peso\" name=\"peso\">\r\n                        </ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Estatura: </ion-label>\r\n                        <ion-input type=\"input\" required type=\"text\" [(ngModel)]=\"estatura\" name=\"estatura\">\r\n                        </ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Talla: </ion-label>\r\n                        <ion-input type=\"input\" required type=\"text\" [(ngModel)]=\"talla\" name=\"talla\">\r\n                        </ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">RH: </ion-label>\r\n                        <ion-input type=\"input\" required type=\"text\" [(ngModel)]=\"rh\" name=\"rh\">\r\n                        </ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label>Pie Habil</ion-label>\r\n                        <ion-select [(ngModel)]=\"pie_habil\" placeholder=\"Seleccione una\">\r\n                            <ion-select-option value=\"derecha\">Derecha</ion-select-option>\r\n                            <ion-select-option value=\"izquierda\">Izquierda</ion-select-option>\r\n                        </ion-select>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label>Institución: </ion-label>\r\n                        <ion-select [(ngModel)]=\"institucion\" placeholder=\"Seleccione una\">\r\n                            <ion-select-option value=\"universidad\">Universidad</ion-select-option>\r\n                            <ion-select-option value=\"colegio\">Colegio</ion-select-option>\r\n                        </ion-select>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Grado/Semestre: </ion-label>\r\n                        <ion-input type=\"input\" required type=\"text\" [(ngModel)]=\"grado\" name=\"grado\">\r\n                        </ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">EPS: </ion-label>\r\n                        <ion-input type=\"input\" required type=\"text\" [(ngModel)]=\"eps\" name=\"eps\">\r\n                        </ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Medicina Prepagada: </ion-label>\r\n                        <ion-input type=\"input\" required type=\"text\" [(ngModel)]=\"prepagada\" name=\"prepagada\">\r\n                        </ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Sisben: </ion-label>\r\n                        <ion-input type=\"input\" required type=\"text\" [(ngModel)]=\"sisben\" name=\"sisben\">\r\n                        </ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">¿Otra Clinica?</ion-label>\r\n                        <ion-input type=\"input\" required type=\"text\" [(ngModel)]=\"otra_clinica\" name=\"otra_clinica\">\r\n                        </ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">¿?</ion-label>\r\n                        <ion-input type=\"input\" required type=\"text\" [(ngModel)]=\"pregunta1\" name=\"pregunta1\">\r\n                        </ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">¿?</ion-label>\r\n                        <ion-input type=\"input\" required type=\"text\" [(ngModel)]=\"pregunta2\" name=\"pregunta2\">\r\n                        </ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">¿?</ion-label>\r\n                        <ion-input type=\"input\" required type=\"text\" [(ngModel)]=\"pregunta3\" name=\"pregunta3\">\r\n                        </ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-button expand=\"block\" type=\"submit\" color=\"primary\" (click)=\"saveForm()\">Inscribir</ion-button>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-card>\r\n</ion-content>\r\n<ion-footer>\r\n    <ion-button expand=\"full\" routerLink=\"/home\" color=\"primary\">CERRAR SESIÓN</ion-button>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/inscripcion/inscripcion.module.ts":
/*!***************************************************!*\
  !*** ./src/app/inscripcion/inscripcion.module.ts ***!
  \***************************************************/
/*! exports provided: InscripcionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InscripcionPageModule", function() { return InscripcionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _inscripcion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inscripcion.page */ "./src/app/inscripcion/inscripcion.page.ts");







var routes = [
    {
        path: '',
        component: _inscripcion_page__WEBPACK_IMPORTED_MODULE_6__["InscripcionPage"]
    }
];
var InscripcionPageModule = /** @class */ (function () {
    function InscripcionPageModule() {
    }
    InscripcionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_inscripcion_page__WEBPACK_IMPORTED_MODULE_6__["InscripcionPage"]]
        })
    ], InscripcionPageModule);
    return InscripcionPageModule;
}());



/***/ }),

/***/ "./src/app/inscripcion/inscripcion.page.scss":
/*!***************************************************!*\
  !*** ./src/app/inscripcion/inscripcion.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc2NyaXBjaW9uL2luc2NyaXBjaW9uLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/inscripcion/inscripcion.page.ts":
/*!*************************************************!*\
  !*** ./src/app/inscripcion/inscripcion.page.ts ***!
  \*************************************************/
/*! exports provided: InscripcionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InscripcionPage", function() { return InscripcionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_ilion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/ilion.service */ "./src/app/servicios/ilion.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var InscripcionPage = /** @class */ (function () {
    function InscripcionPage(servicio, alertController, loadingCtrl, navControl) {
        this.servicio = servicio;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.navControl = navControl;
        // tslint:disable-next-line: variable-name
        this.id_registro = '4';
    }
    InscripcionPage.prototype.ngOnInit = function () {
    };
    InscripcionPage.prototype.saveForm = function () {
        var _this = this;
        var data = {
            nombre_jugaro: this.nombre_jugaro,
            fecha_nacimiento: this.fecha_nacimiento,
            lugar: this.lugar,
            documento_identidad: this.documento_identidad,
            tipo_documento: this.tipo_documento,
            genero: this.genero,
            direccion_residencia: this.direccion_residencia,
            barrio: this.barrio,
            telefono: this.telefono,
            celular: this.celular,
            email: this.email,
            whatsapp: this.whatsapp,
            edad: this.edad,
            peso: this.peso,
            estatura: this.estatura,
            talla: this.talla,
            rh: this.rh,
            pie_habil: this.pie_habil,
            institucion: this.institucion,
            grado: this.grado,
            eps: this.eps,
            prepagada: this.prepagada,
            sisben: this.sisben,
            otra_clinica: this.otra_clinica,
            pregunta1: this.pregunta1,
            pregunta2: this.pregunta2,
            pregunta3: this.pregunta3,
            id_registro: this.id_registro
        };
        console.log(data);
        this.servicio.setDatos_jugador(data)
            .subscribe(function (response) {
            console.log(response);
            var json = JSON.parse(JSON.stringify(response));
            _this.resultado = json.contenido.Post_datos_jugador.Error;
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
    InscripcionPage.prototype.presentAlertExito = function () {
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
    InscripcionPage.prototype.presentAlertError = function () {
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
    InscripcionPage.ctorParameters = function () { return [
        { type: _servicios_ilion_service__WEBPACK_IMPORTED_MODULE_2__["ilionService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
    ]; };
    InscripcionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inscripcion',
            template: __webpack_require__(/*! raw-loader!./inscripcion.page.html */ "./node_modules/raw-loader/index.js!./src/app/inscripcion/inscripcion.page.html"),
            styles: [__webpack_require__(/*! ./inscripcion.page.scss */ "./src/app/inscripcion/inscripcion.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_ilion_service__WEBPACK_IMPORTED_MODULE_2__["ilionService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], InscripcionPage);
    return InscripcionPage;
}());



/***/ })

}]);
//# sourceMappingURL=inscripcion-inscripcion-module-es5.js.map