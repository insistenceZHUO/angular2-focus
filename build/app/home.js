var __decorate=this&&this.__decorate||function(e,t,i,n){if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)return Reflect.decorate(e,t,i,n);switch(arguments.length){case 2:return e.reduceRight(function(e,t){return t&&t(e)||e},t);case 3:return e.reduceRight(function(e,n){return void(n&&n(t,i))},void 0);case 4:return e.reduceRight(function(e,n){return n&&n(t,i,e)||e},n)}},__metadata=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},angular2_1=require("angular2/angular2"),focus_timer_component_1=require("./components/focus-timer.component"),notification_service_1=require("./services/notification.service"),interfaces_1=require("./interfaces/interfaces"),Home=function(){function e(e){this._notificationService=e,this.notificationsEnabled=!1,this.notificationsSupported=!0,this._notificationService.hasPermission()===interfaces_1.NotificationPermission.GRANTED&&(this.notificationsEnabled=!0),this._notificationService.hasPermission()===interfaces_1.NotificationPermission.UNSUPPORTED&&(this.notificationsSupported=!1)}return e.prototype.enableNotifications=function(){this._notificationService.requestPermission()},e=__decorate([angular2_1.Component({selector:"focus-home",templateUrl:"app/home.html?v=1448947688338",directives:[focus_timer_component_1.FocusTimerCmp]}),__metadata("design:paramtypes",[notification_service_1.NotificationService])],e)}();exports.Home=Home;