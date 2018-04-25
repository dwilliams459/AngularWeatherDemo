import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

export class WeatherService {
    private _weatherURL = 'https://api.weather.gov/gridpoints/TOP/35,81/forecast';

    constructor (private _http: HttpClient) { }

    getWeather(): Observable<any> {
        return this._http.get(this._weatherURL)
                   .do(data => console.log('All Data: ' + JSON.stringify(data)))
                   .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}


