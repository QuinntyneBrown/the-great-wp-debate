import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { PageHeaderComponent } from './page-header.component';

const declarables = [PageHeaderComponent];

@NgModule({
    imports: [CommonModule],
    exports: [declarables],
    declarations: [declarables]
})
export class SharedModule { }
