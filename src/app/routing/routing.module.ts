import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from "./authentication-guard";
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
        component: DebatesPageComponent,
        canActivate: [AuthenticationGuard]
    },
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: 'schedule',
        component: SchedulePageComponent,
        canActivate: [AuthenticationGuard]
    },
    {
        path: 'debate/:id',
        component: DebatePageComponent,
        canActivate: [AuthenticationGuard]
    }
];

export const RoutingModule = RouterModule.forRoot([
    ...routes
]);

export const routedComponents = [
    LandingPageComponent,
    DebatesPageComponent,
    DebatePageComponent,
    SchedulePageComponent,   
    LoginPageComponent 
];

