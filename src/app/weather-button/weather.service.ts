import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import * as jsonparse from 'jsonparse/jsonparse.js';

@Injectable()
export class WeatherService {
    private openWeatherMapApiKey = "96dcdd91aab685baa5d0a6cff3b9c76f"  // *** USE YOUR OWN at http://openweathermap.org (free) ***
    private _weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=**CITY**,usa&units=imperial&appid=**APIKEY**'
    // Example: http://api.openweathermap.org/data/2.5/forecast?q=charlotte,usa&units=imperial&appid=96dcdd91aab685baa5d0a6cff3b9c76f

    constructor (private _http: HttpClient) { }

    getForcast(city): Observable<any> {
        var targetUrl = this._weatherUrl.replace("**CITY**", city).replace("**APIKEY**", this.openWeatherMapApiKey);

        return this._http.get(targetUrl)
                   .do(data => console.log('All Data: ' + JSON.stringify(data)))
                   .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}


