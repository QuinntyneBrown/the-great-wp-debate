import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { MeetingsPageComponent } from './meetings-page.component';

const declarables = [MeetingsPageComponent];
const providers = [];

@NgModule({
    imports: [CommonModule],
    exports: [declarables],
    declarations: [declarables],
	providers: providers
})
export class MeetingModule { }
