import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { LandingPageComponent } from './landing-page.component';
import { LandingRouterModule } from "./landing.routes";


const declarables = [LandingPageComponent];

@NgModule({
    imports: [CommonModule, LandingRouterModule],
    exports: [declarables],
    declarations: [declarables]
})
export class LandingModule { }
