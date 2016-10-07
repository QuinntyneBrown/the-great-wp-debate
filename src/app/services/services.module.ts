import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";

import { MeetingService } from "./meeting.service";
import { UserService } from "./user.service";

const providers = [
    MeetingService,
    UserService
];

@NgModule({
    imports: [CommonModule, HttpModule],
	providers: providers
})
export class ServicesModule { }
