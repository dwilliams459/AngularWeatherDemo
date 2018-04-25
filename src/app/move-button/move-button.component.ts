import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
//import { WeatherService } from './weather.service'

@Component({
  selector: 'move-button',
  templateUrl: './move-button.component.html',
  styleUrls: ['./move-button.component.css'],
})
export class MoveButtonComponent implements OnInit {
  errorMessage: any;
  weather: any;
  imageMargin: number = 2;

  @Input() buttonText: string = "button";
  @Input() imageName: string;
  @Input() moveVertical: number = 0;
  @Input() moveHorizontal: number = 0;
  @Output() horizontalClicked: EventEmitter<number> = new EventEmitter<number>();
  @Output() verticalClicked: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {
  }

  onClick(): void {
    console.log(`Move h: ${this.moveHorizontal} $(this.moveHorizontal}`);

    if (this.moveHorizontal != 0) {
      this.horizontalClicked.emit(this.moveHorizontal);
    }
    else {
      this.verticalClicked.emit(this.moveVertical);
    }
  }
    // this._weatherService.getWeather()
    //   .subscribe(weather => {
    //     this.weather = weather;
    //     // Add JSON query for conditions and forecast
    //   },
    //     error => this.errorMessage = <any>error
    //   )
}
