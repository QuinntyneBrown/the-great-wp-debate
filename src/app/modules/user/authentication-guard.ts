import { Injectable } from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router'

import { LocalStorageService } from "../services";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationGuard {    
    constructor(private _router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        if (LocalStorageService.Instance.get({ name: "token" })) { return Observable.of(true); }        

        this._router.navigate(["/login"]);
        return Observable.of(false);
    }

}
