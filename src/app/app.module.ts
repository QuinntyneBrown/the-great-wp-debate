import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { RouterModule  } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import "./rxjs-extensions";

import { AppComponent } from './app.component';

import { BlogModule } from "./blog";
import { DebateModule } from "./debate";
import { MeetingModule } from "./meeting";
import { SharedModule } from "./shared";
import { UserModule } from "./user";

import {
    RoutingModule,
    routedComponents
} from "./app.routing";

const declarables = [
    AppComponent
];

@NgModule({
    imports: [
        RoutingModule,

        BlogModule,
        DebateModule,
        MeetingModule,
        SharedModule,
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

