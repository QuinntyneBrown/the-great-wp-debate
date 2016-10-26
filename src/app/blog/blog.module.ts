import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ArticlePageComponent } from './article-page.component';
import { ArticleService } from "./article.service";
import { BlogRouterModule } from "./blog.routes";

const declarables = [
    ArticlePageComponent
];

const providers = [
    ArticleService
];

@NgModule({
    imports: [CommonModule, BlogRouterModule],
    exports: [declarables],
    declarations: [declarables],
    providers: [providers]
})
export class BlogModule { }
