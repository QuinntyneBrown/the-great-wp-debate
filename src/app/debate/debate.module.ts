import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { DebatePageComponent } from './debate-page.component';
import { DebatesPageComponent } from './debates-page.component';
import { SchedulePageComponent } from './schedule-page.component';
import { DebateService } from "./debate.service";

const declarables = [
    DebatePageComponent,
    DebatesPageComponent,
    SchedulePageComponent
];


const providers = [
    DebateService
];

@NgModule({
    imports: [CommonModule],
    exports: [declarables],
    declarations: [declarables],
    providers: providers
})
export class DebateModule { }
