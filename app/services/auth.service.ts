import {Injectable} from 'angular2/angular2';
declare let Firebase;

@Injectable()
export class AuthService {
    user$: Rx.Observable<any>;
    private _userObserver: Rx.Observer<any>;
    private _firebaseRef: any;

    constructor() {
        this._firebaseRef = new Firebase('https://agile-pomodoro.firebaseio.com/');
        this.user$ = Rx.Observable.create(observer => this._userObserver = observer).share();

		this._firebaseRef.onAuth(authData => {
			if (authData) {
				console.log("User " + authData.uid + " is logged in with " + authData.provider);
			} else {
				console.log("User is logged out");
			}
		});
    }

	login() {
		this._firebaseRef.authWithOAuthPopup('twitter', (error, authData) => {
			if (error) {
				console.log('Login Failed!', error);
			} else {
				console.log('Authenticated successfully with payload:', authData);
			}
		});
	}

	logout() {
		this._firebaseRef.unauth();
	}
}