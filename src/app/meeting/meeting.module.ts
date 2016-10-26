import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { MeetingsPageComponent } from './meetings-page.component';
import { MeetingService } from "./meeting.service";
import { MeetingRouterModule } from "./meeting.routes";

const declarables = [MeetingsPageComponent];

const providers = [MeetingService];

@NgModule({
    imports: [CommonModule, MeetingRouterModule],
    exports: [declarables],
    declarations: [declarables],
	providers: providers
})
export class MeetingModule { }
