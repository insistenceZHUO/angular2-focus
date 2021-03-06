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
var timer_service_1 = require('../../services/timer.service');
var interfaces_1 = require('../../../interfaces/interfaces');
var FocusTimerComponent = (function () {
    function FocusTimerComponent(_timerService) {
        var _this = this;
        this._timerService = _timerService;
        this.timeCompleted = new core_1.EventEmitter();
        this.runningTime = new Date();
        this.runningTime.setMinutes(0);
        this.runningTime.setSeconds(0);
        this.clockRunning = false;
        this._timerService.runningTime$.subscribe(function (time) { return _this._calcTime(time); });
        this.phaseType = this._timerService.runningPhaseType;
    }
    FocusTimerComponent.prototype.ngOnInit = function () {
    };
    FocusTimerComponent.prototype.startFocus = function () {
        if (this.clockRunning) {
            this._timerService.stopTimer();
        }
        else {
            this._timerService.startTimer(interfaces_1.PhaseType.FOCUS);
        }
        this.phaseType = this._timerService.runningPhaseType;
    };
    FocusTimerComponent.prototype.startShortBreak = function () {
        if (this.clockRunning) {
            this._timerService.stopTimer();
        }
        else {
            this._timerService.startTimer(interfaces_1.PhaseType.SHORT_BREAK);
        }
        this.phaseType = this._timerService.runningPhaseType;
    };
    FocusTimerComponent.prototype.startLongBreak = function () {
        if (this.clockRunning) {
            this._timerService.stopTimer();
        }
        else {
            this._timerService.startTimer(interfaces_1.PhaseType.LONG_BREAK);
        }
        this.phaseType = this._timerService.runningPhaseType;
    };
    FocusTimerComponent.prototype._calcTime = function (time) {
        this.runningTime = time;
        this.clockRunning = true;
        document.title = this.runningTime.getMinutes() + ":" + this.runningTime.getSeconds();
        if (this.runningTime.getSeconds() === 0 && this.runningTime.getMinutes() === 0) {
            this.timeCompleted.next(true);
            this.phaseType = null;
            this.clockRunning = false;
            document.title = 'Focus Time Management';
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], FocusTimerComponent.prototype, "timeCompleted", void 0);
    FocusTimerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-focus-timer',
            templateUrl: 'focus-timer.component.html',
            styleUrls: ['focus-timer.component.css']
        }), 
        __metadata('design:paramtypes', [timer_service_1.TimerService])
    ], FocusTimerComponent);
    return FocusTimerComponent;
}());
exports.FocusTimerComponent = FocusTimerComponent;
//# sourceMappingURL=focus-timer.component.js.map