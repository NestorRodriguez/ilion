(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calendar-calendar-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/calendar/calendar.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/calendar/calendar.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"Regresar\" defaultHref=\"/menu\"></ion-back-button>\n        </ion-buttons>\n        <ion-img class=\"img\" slot=\"start\"></ion-img>\n        <ion-title>\n            Calendario\n        </ion-title>\n        <ion-img class=\"img\" slot=\"end\"></ion-img>\n    </ion-toolbar>\n    <span class=\"menu\" color=\"secondary\"></span>\n    <!-- </ion-toolbar> -->\n    <ion-toolbar class=\"title\">\n        <ion-title>\n            {{ viewTitle }}\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"today()\">Hoy</ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <!-- Card for adding a new event -->\n    <ion-card>\n        <ion-card-header tappable (click)=\"collapseCard = !collapseCard\">\n            <ion-card-title>Nuevo Evento</ion-card-title>\n        </ion-card-header>\n        <ion-card-content *ngIf=\"!collapseCard\">\n\n            <ion-item>\n                <ion-input type=\"text\" placeholder=\"Title\" [(ngModel)]=\"event.title\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input type=\"text\" placeholder=\"Description\" [(ngModel)]=\"event.desc\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>Inicio</ion-label>\n                <ion-datetime displayFormat=\"MM/DD/YYYY HH:mm\" pickerFormat=\"MMM D:HH:mm\" [(ngModel)]=\"event.startTime\" [min]=\"minDate\"></ion-datetime>\n            </ion-item>\n            <ion-item>\n                <ion-label>Fin</ion-label>\n                <ion-datetime displayFormat=\"MM/DD/YYYY HH:mm\" pickerFormat=\"MMM D:HH:mm\" [(ngModel)]=\"event.endTime\" [min]=\"minDate\"></ion-datetime>\n            </ion-item>\n            <ion-item>\n                <ion-label>¿Todos los diás?</ion-label>\n                <ion-checkbox [(ngModel)]=\"event.allDay\"></ion-checkbox>\n            </ion-item>\n            <ion-button fill=\"outline\" expand=\"block\" (click)=\"addEvent()\" [disabled]=\"event.title == ''\">Agregar Evento\n            </ion-button>\n\n        </ion-card-content>\n    </ion-card>\n\n    <ion-row>\n        <!-- Change the displayed calendar mode -->\n        <ion-col size=\"4\">\n            <ion-button expand=\"block\" [color]=\"calendar.mode == 'month' ? 'primary' : 'secondary'\" (click)=\"changeMode('month')\">Mes</ion-button>\n        </ion-col>\n        <ion-col size=\"4\">\n            <ion-button expand=\"block\" [color]=\"calendar.mode == 'week' ? 'primary' : 'secondary'\" (click)=\"changeMode('week')\">Semana</ion-button>\n        </ion-col>\n        <ion-col size=\"4\">\n            <ion-button expand=\"block\" [color]=\"calendar.mode == 'day' ? 'primary' : 'secondary'\" (click)=\"changeMode('day')\">\n                Día</ion-button>\n        </ion-col>\n\n        <!-- Move back one screen of the slides -->\n        <ion-col size=\"6\" text-left>\n            <ion-button fill=\"clear\" (click)=\"back()\">\n                <ion-icon name=\"arrow-back\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n        </ion-col>\n\n        <!-- Move forward one screen of the slides -->\n        <ion-col size=\"6\" text-right>\n            <ion-button fill=\"clear\" (click)=\"next()\">\n                <ion-icon name=\"arrow-forward\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n\n    <calendar [eventSource]=\"eventSource\" [calendarMode]=\"calendar.mode\" [currentDate]=\"calendar.currentDate\" (onEventSelected)=\"onEventSelected($event)\" (onTitleChanged)=\"onViewTitleChanged($event)\" (onTimeSelected)=\"onTimeSelected($event)\" startHour=\"6\"\n        endHour=\"20\" step=\"30\" startingDayWeek=\"1\">\n    </calendar>\n\n</ion-content>\n<ion-footer>\n    <ion-button expand=\"full\" routerLink=\"/home\" color=\"primary\">CERRAR SESIÓN</ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/calendar/calendar.module.ts":
/*!*********************************************!*\
  !*** ./src/app/calendar/calendar.module.ts ***!
  \*********************************************/
/*! exports provided: CalendarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPageModule", function() { return CalendarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _calendar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar.page */ "./src/app/calendar/calendar.page.ts");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic2-calendar */ "./node_modules/ionic2-calendar/index.js");








var routes = [
    {
        path: '',
        component: _calendar_page__WEBPACK_IMPORTED_MODULE_6__["CalendarPage"]
    }
];
var CalendarPageModule = /** @class */ (function () {
    function CalendarPageModule() {
    }
    CalendarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__["NgCalendarModule"]
            ],
            declarations: [_calendar_page__WEBPACK_IMPORTED_MODULE_6__["CalendarPage"]]
        })
    ], CalendarPageModule);
    return CalendarPageModule;
}());



/***/ }),

/***/ "./src/app/calendar/calendar.page.scss":
/*!*********************************************!*\
  !*** ./src/app/calendar/calendar.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGFyL2NhbGVuZGFyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/calendar/calendar.page.ts":
/*!*******************************************!*\
  !*** ./src/app/calendar/calendar.page.ts ***!
  \*******************************************/
/*! exports provided: CalendarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPage", function() { return CalendarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionic2-calendar/calendar */ "./node_modules/ionic2-calendar/calendar.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");

// import { Component, OnInit } from '@angular/core';




var CalendarPage = /** @class */ (function () {
    function CalendarPage(alertCtrl, locale) {
        this.alertCtrl = alertCtrl;
        this.locale = locale;
        this.event = {
            title: '',
            desc: '',
            startTime: '',
            endTime: '',
            allDay: false
        };
        this.minDate = new Date().toISOString();
        this.eventSource = [];
        this.calendar = {
            mode: 'month',
            currentDate: new Date(),
        };
    }
    CalendarPage.prototype.ngOnInit = function () {
        this.resetEvent();
    };
    CalendarPage.prototype.resetEvent = function () {
        this.event = {
            title: '',
            desc: '',
            startTime: new Date().toISOString(),
            endTime: new Date().toISOString(),
            allDay: false
        };
    };
    // Create the right event format and reload source
    CalendarPage.prototype.addEvent = function () {
        var eventCopy = {
            title: this.event.title,
            startTime: new Date(this.event.startTime),
            endTime: new Date(this.event.endTime),
            allDay: this.event.allDay,
            desc: this.event.desc
        };
        if (eventCopy.allDay) {
            var start = eventCopy.startTime;
            var end = eventCopy.endTime;
            eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
            eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
        }
        this.eventSource.push(eventCopy);
        this.myCal.loadEvents();
        this.resetEvent();
    };
    CalendarPage.prototype.next = function () {
        var swiper = document.querySelector('.swiper-container')['swiper'];
        swiper.slideNext();
    };
    CalendarPage.prototype.back = function () {
        var swiper = document.querySelector('.swiper-container')['swiper'];
        swiper.slidePrev();
    };
    // Change between month/week/day
    CalendarPage.prototype.changeMode = function (mode) {
        this.calendar.mode = mode;
    };
    // Focus today
    CalendarPage.prototype.today = function () {
        this.calendar.currentDate = new Date();
    };
    // Selected date reange and hence title changed
    CalendarPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    // Calendar event was clicked
    CalendarPage.prototype.onEventSelected = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var start, end, alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        start = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(event.startTime, 'medium', this.locale);
                        end = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(event.endTime, 'medium', this.locale);
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: event.title,
                                subHeader: event.desc,
                                message: 'From: ' + start + '<br><br>To: ' + end,
                                buttons: ['OK']
                            })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Time slot was clicked
    CalendarPage.prototype.onTimeSelected = function (ev) {
        var selected = new Date(ev.selectedTime);
        this.event.startTime = selected.toISOString();
        selected.setHours(selected.getHours() + 1);
        this.event.endTime = (selected.toISOString());
    };
    CalendarPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],] }] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarComponent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarComponent"])
    ], CalendarPage.prototype, "myCal", void 0);
    CalendarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-calendar',
            template: __webpack_require__(/*! raw-loader!./calendar.page.html */ "./node_modules/raw-loader/index.js!./src/app/calendar/calendar.page.html"),
            styles: [__webpack_require__(/*! ./calendar.page.scss */ "./src/app/calendar/calendar.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], String])
    ], CalendarPage);
    return CalendarPage;
}());



/***/ })

}]);
//# sourceMappingURL=calendar-calendar-module-es5.js.map