import {RouterModule, Routes } from '@angular/router';

import { MeetingsPageComponent } from "./meetings-page.component";

const MEETING_ROUTES: Routes = [
    {
        path: '',
        component: MeetingsPageComponent
    }
];

export const MeetingRouterModule = RouterModule.forChild(MEETING_ROUTES);
