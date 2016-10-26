import {
    Component,
    ChangeDetectionStrategy,
    Input,
    OnInit
} from "@angular/core";


import {
    Router
} from "@angular/router";

@Component({
    template: require("./landing-page.component.html"),
    styles: [require("./landing-page.component.scss")],
    selector: "landing-page"
})
export class LandingPageComponent { 
    constructor(private _router: Router) { }
    
    public logoUrl: string = "src/images/logo.jpg";
}
