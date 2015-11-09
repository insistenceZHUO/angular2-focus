import {Component, NgZone, CORE_DIRECTIVES} from 'angular2/angular2';
import {FocusPhaseCmp} from 'app/components/focus-phase.component';
import {DataService} from 'app/services/data.service';
import {AuthUser} from 'app/interfaces/interfaces';
import {AuthService} from 'app/services/auth.service';

declare let Firebase;

@Component({
    selector: 'focus-stats',
    templateUrl: 'app/stats.html',
    directives: [CORE_DIRECTIVES, FocusPhaseCmp]
})
export class Stats {
    authUser: AuthUser;
    focusPhases: any;

    constructor(
        private _authService: AuthService,
        private _dataService: DataService) {

        this._dataService.focusPhases$.subscribe(focusPhases => this.focusPhases = focusPhases);
        this._dataService.loadFocusPhases();
        
        this._authService.authUser$.subscribe(authUser => this.authUser = authUser);
        this._authService.loadAuthUser();
    }

    login() {
        this._authService.login();
    }
}