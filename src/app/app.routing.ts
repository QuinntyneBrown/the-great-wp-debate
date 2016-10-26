import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard, LoginPageComponent } from "./user";
import { DebatePageComponent, DebatesPageComponent, SchedulePageComponent } from "./debate";

export const routes: Routes = [
    {
        path: '',
        loadChildren: './landing/landing.module#LandingModule'
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
    DebatesPageComponent,
    DebatePageComponent,
    SchedulePageComponent,
    LoginPageComponent
];

