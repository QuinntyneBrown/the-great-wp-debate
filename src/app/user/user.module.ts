import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { LoginPageComponent } from './login-page.component';
import { LoginRedirectService } from "./login-redirect.service";
import { AuthenticationGuard } from "./authentication-guard"
import { UserService } from "./user.service";
import { UserRouterModule } from "./user.routes";

import { LocalStorageService } from "ng2-local-storage";

const declarables = [LoginPageComponent];
const providers = [AuthenticationGuard, UserService, LoginRedirectService, LocalStorageService];

@NgModule({
    imports: [CommonModule, UserRouterModule],
    exports: [declarables],
    declarations: [declarables],
	providers: providers
})
export class UserModule { }
