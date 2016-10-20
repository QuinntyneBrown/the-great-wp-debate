import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { LoginPageComponent } from './login-page.component';
import { LoginRedirectService } from "./login-redirect.service";
import { AuthenticationGuard } from "./authentication-guard"
import { UserService } from "./user.service";

const declarables = [LoginPageComponent];
const providers = [AuthenticationGuard, UserService, LoginRedirectService];

@NgModule({
    imports: [CommonModule],
    exports: [declarables],
    declarations: [declarables],
	providers: providers
})
export class UserModule { }
