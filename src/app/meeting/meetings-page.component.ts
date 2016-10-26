import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./meetings-page.component.html"),
    styles: [require("./meetings-page.component.scss")],
    selector: "meetings-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MeetingsPageComponent implements OnInit { 
    ngOnInit() {

    }
}
