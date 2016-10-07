import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class MeetingService {
    constructor(private _http: Http) { }

    public get() {
        return this._http
            .get(`${this.baseUrl}/api/meeting/get`)
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }

    public getById(options: { id: number }) {
        return this._http
            .get(`${this.baseUrl}/api/meeting/getById?id=${options.id}`)
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }
    
    public get baseUrl() { return "http://meeting-backend-service.azurewebsites.net"; }

}
