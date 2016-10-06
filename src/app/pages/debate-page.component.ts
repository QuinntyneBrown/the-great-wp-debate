import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./debate-page.component.html"),
    styles: [require("./debate-page.component.scss")],
    selector: "debate-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DebatePageComponent implements OnInit { 
    ngOnInit() {

    }
}
