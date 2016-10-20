import { Component, ChangeDetectionStrategy, Input } from "@angular/core";
import { UserService } from "./user.service";
import { LoginRedirectService } from "./login-redirect.service";
import { LocalStorageService } from "ng2-local-storage";

@Component({
    template: require("./login-page.component.html"),
    styles: [require("./login-page.component.scss")],
    selector: "login-page"
})
export class LoginPageComponent {
    constructor(
        private _userService: UserService,
        private _localStorageService: LocalStorageService,
        private _loginRedirectService: LoginRedirectService
    ) { }

    public userId: string = "";
    public onEnter() {
        this._userService
            .getById({ uniqueId: this.userId })
            .subscribe((token: any) => {
                if (token) {
                    this._localStorageService.put({ token });
                    this._loginRedirectService.redirectPreLogin()
                }
            });
    }
}
