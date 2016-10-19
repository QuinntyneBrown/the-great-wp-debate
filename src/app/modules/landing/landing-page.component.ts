import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./landing-page.component.html"),
    styles: [require("./landing-page.component.scss")],
    selector: "landing-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent implements OnInit { 
    ngOnInit() {

    }

    public logoUrl: string = "src/images/logo.jpg";
}
