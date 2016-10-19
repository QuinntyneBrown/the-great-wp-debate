import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { LandingPageComponent } from './landing-page.component';

const declarables = [LandingPageComponent];

@NgModule({
    imports: [CommonModule],
    exports: [declarables],
    declarations: [declarables]
})
export class LandingModule { }
