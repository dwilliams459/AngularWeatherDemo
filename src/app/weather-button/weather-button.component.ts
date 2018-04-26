import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
    selector: 'weather-button',
    templateUrl: './weather-button.component.html'
})
export class WeatherButtonComponent {
    errorMessage: any;
    @Input() city: string = "charlotte";
    @Input() cityName: string = "Charlotte";
    @Output() weatherClicked: EventEmitter<any> = new EventEmitter<any>();

    constructor(private _weatherService: WeatherService) { }

    onClick(): void {
        console.log(`Weather button selected ${this.city}`);
        this._weatherService.getForcast(this.city)
            .subscribe(
                forecast => {
                    this.weatherClicked.emit(forecast);
                },
                error => this.errorMessage = <any>error
            );
    }
}

