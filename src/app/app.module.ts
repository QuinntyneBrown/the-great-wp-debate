import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { RouterModule  } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import "./rxjs-extensions";

import { AppComponent } from './app.component';

import { ComponentsModule } from "./components";

import {
    BlogModule,
    DebateModule,
    LandingModule,
    MeetingModule,
    UserModule
} from "./modules";

import {
    RoutingModule,
    routedComponents
} from "./routing";

const declarables = [
    AppComponent
];

@NgModule({
    imports: [
        ComponentsModule,
        RoutingModule,

        BlogModule,
        DebateModule,
        LandingModule,
        MeetingModule,
        UserModule,

        BrowserModule,
        HttpModule,
        CommonModule,
        FormsModule,
        RouterModule
    ],
    declarations: [declarables],
    exports: [declarables],
    bootstrap: [AppComponent]
})
export class AppModule { }

