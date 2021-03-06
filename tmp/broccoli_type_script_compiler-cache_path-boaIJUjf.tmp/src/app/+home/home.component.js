"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var focus_timer_1 = require('../shared/components/focus-timer');
var notification_service_1 = require('../shared/services/notification.service');
var interfaces_1 = require('../interfaces/interfaces');
var HomeComponent = (function () {
    function HomeComponent(_notificationService) {
        this._notificationService = _notificationService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.notificationsEnabled = false;
        this.notificationsSupported = true;
        if (this._notificationService.hasPermission() === interfaces_1.NotificationPermission.GRANTED) {
            this.notificationsEnabled = true;
        }
        if (this._notificationService.hasPermission() === interfaces_1.NotificationPermission.UNSUPPORTED) {
            this.notificationsSupported = false;
        }
    };
    HomeComponent.prototype.enableNotifications = function () {
        this._notificationService.requestPermission();
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-home',
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css'],
            directives: [focus_timer_1.FocusTimerComponent]
        }), 
        __metadata('design:paramtypes', [notification_service_1.NotificationService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map