import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { LoginPageComponent } from './login-page.component';;
import { AuthenticationGuard } from "./authentication-guard"
import { UserService } from "./user.service";

const declarables = [LoginPageComponent];
const providers = [AuthenticationGuard, UserService];

@NgModule({
    imports: [CommonModule],
    exports: [declarables],
    declarations: [declarables],
	providers: providers
})
export class UserModule { }
