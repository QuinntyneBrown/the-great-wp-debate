import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class UserService {
    constructor(private _http: Http) { }
    
    public getById(options: { uniqueId: string }) {
        return this._http
            .get(`${this.baseUrl}/api/user/getById?uniqueId=${options.uniqueId}`)
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }
    
    public get baseUrl() { return "http://user-backend-service.azurewebsites.net"; }

}
