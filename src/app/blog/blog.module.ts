import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ArticlePageComponent } from './article-page.component';
import { ArticleService } from "./article.service";

const declarables = [
    ArticlePageComponent
];

const providers = [
    ArticleService
];

@NgModule({
    imports: [CommonModule],
    exports: [declarables],
    declarations: [declarables],
    providers: [providers]
})
export class BlogModule { }
