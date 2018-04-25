import { Component } from '@angular/core';
import { MoveButtonComponent } from './move-button/move-button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Raspberry Controller';
  locationVertical: number = 0;
  locationHorizontal: number = 0;
  weather: string;
  hoz: number = 0;

  onMove(horizontal: number, vertical: number) {
    this.locationHorizontal = this.locationHorizontal + horizontal;
    this.locationVertical = this.locationVertical + vertical;
    console.log(`h:${horizontal} v:${vertical}`);
  }

  onHorizontalMove(horizontal: number) {
    this.locationHorizontal = (1*this.locationHorizontal) + (1*horizontal);
    console.log(`h:${this.locationHorizontal} v:${this.locationVertical}`);
  }
  onVerticalMove(vertical: number) {
    this.locationVertical = (1*this.locationVertical) + (1*vertical);
    console.log(`h:${this.locationHorizontal} v:${this.locationVertical}`);
  }
}