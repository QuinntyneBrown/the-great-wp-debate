import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { DebatePageComponent } from './debate-page.component';
import { DebatesPageComponent } from './debates-page.component';
import { SchedulePageComponent } from './schedule-page.component';

const declarables = [
    DebatePageComponent,
    DebatesPageComponent,
    SchedulePageComponent
];

@NgModule({
    imports: [CommonModule],
    exports: [declarables],
    declarations: [declarables]
})
export class DebateModule { }
