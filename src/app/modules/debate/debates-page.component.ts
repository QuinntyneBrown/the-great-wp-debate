import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./debates-page.component.html"),
    styles: [require("./debates-page.component.scss")],
    selector: "debates-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DebatesPageComponent implements OnInit { 
    ngOnInit() {

    }
}
