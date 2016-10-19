import { Component, ChangeDetectionStrategy, Input, OnInit, ViewEncapsulation, Renderer } from "@angular/core";

@Component({
    template: require("./app.component.html"),
    styles: [require("./app.component.scss")],
    selector: "app",
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    constructor(private renderer: Renderer) {

    }

}
