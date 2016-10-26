import {RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from "./login-page.component";

const USER_ROUTES: Routes = [
    {
        path: 'login',
        component: LoginPageComponent
    }
];

export const UserRouterModule = RouterModule.forChild(USER_ROUTES);
