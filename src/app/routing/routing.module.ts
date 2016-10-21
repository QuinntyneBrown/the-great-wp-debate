import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from "../modules";
import {
    DebatePageComponent,
    DebatesPageComponent,
    LoginPageComponent,
    SchedulePageComponent
} from "../modules";

export const routes: Routes = [
    {
        path: '',
        loadChildren: '../modules/landing/landing.module#LandingModule'
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

