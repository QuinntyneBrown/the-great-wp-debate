import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ArticlePageComponent } from './article-page.component';

const declarables = [
    ArticlePageComponent
];


@NgModule({
    imports: [CommonModule],
    exports: [declarables],
    declarations: [declarables]
})
export class BlogModule { }
