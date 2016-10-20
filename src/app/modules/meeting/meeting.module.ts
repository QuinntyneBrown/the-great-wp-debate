import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { MeetingsPageComponent } from './meetings-page.component';
import { MeetingService } from "./meeting.service";

const declarables = [MeetingsPageComponent];

const providers = [MeetingService];

@NgModule({
    imports: [CommonModule],
    exports: [declarables],
    declarations: [declarables],
	providers: providers
})
export class MeetingModule { }
