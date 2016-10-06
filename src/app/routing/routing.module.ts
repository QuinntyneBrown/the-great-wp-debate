import { Routes, RouterModule } from '@angular/router';

import {
    LandingPageComponent,
    DebatePageComponent,
    DebatesPageComponent,
    LoginPageComponent,
    SchedulePageComponent
} from "../pages";

export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'debates',
        component: DebatesPageComponent
    },
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: 'schedule',
        component: SchedulePageComponent
    },
    {
        path: 'debate/:id',
        component: DebatePageComponent
    }
];

export const RoutingModule = RouterModule.forRoot([
    ...routes
]);

export const routedComponents = [
    LandingPageComponent
];

