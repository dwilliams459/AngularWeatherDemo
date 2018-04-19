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
  hoz: number = 0;

  onMove(horizontal: any, vertical: number) {
    console.log(`test h:${horizontal}`);
    this.locationHorizontal = (horizontal > 0) 
      ? (this.locationHorizontal + horizontal) : (this.locationHorizontal - horizontal);
    this.locationVertical = this.locationVertical + vertical;
    console.log(`h:${horizontal} v:${vertical}`);
    var hoz = (+horizontal > 0) ? "true" : "false"; // ? (this.locationHorizontal + horizontal) : (this.locationHorizontal - horizontal);
    console.log(`${hoz}`)
  }
}