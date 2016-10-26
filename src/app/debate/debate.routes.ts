import {RouterModule, Routes } from '@angular/router';

import { DebatePageComponent } from "./debate-page.component";

const DEBATE_ROUTES: Routes = [
    {
        path: '',
        component: DebatePageComponent
    }
];

export const DebateRouterModule = RouterModule.forChild(DEBATE_ROUTES);
