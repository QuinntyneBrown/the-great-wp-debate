import {RouterModule, Routes } from '@angular/router';

import { ArticlePageComponent } from "./article-page.component";

const BLOG_ROUTES: Routes = [
    {
        path: '',
        component: ArticlePageComponent
    }
];

export const BlogRouterModule = RouterModule.forChild(BLOG_ROUTES);
