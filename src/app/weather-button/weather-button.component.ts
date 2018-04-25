import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
    selector: 'weather-button',
    templateUrl: './weather-button.component.html',
})
export class WeatherButtonComponent implements OnInit {
    errorMessage: any;
    forecast: string;

    @Input() city: string = "charlotte";
    @Input() cityName: string = "Charlotte";

    @Output() weatherClicked: EventEmitter<any> = new EventEmitter<any>();

    constructor(private _weatherService: WeatherService) {
    }

    ngOnInit(){
    }

    onClick(): void {
        console.log(`Weather button selected ${this.city}`);
        this._weatherService.getForcast(this.city)
            .subscribe(
                fc => {
                    this.forecast = fc;
                    this.weatherClicked.emit(fc);
                },
                error => this.errorMessage = <any>error
            );
    }
}