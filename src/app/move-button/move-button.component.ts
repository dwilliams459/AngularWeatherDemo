import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'move-button',
  templateUrl: './move-button.component.html',
  styleUrls: ['./move-button.component.css'],
})
export class MoveButtonComponent {
  errorMessage: any;
  imageMargin: number = 2;

  @Input() buttonText: string = "button";
  @Input() imageName: string;
  @Input() moveVertical: number = 0;
  @Input() moveHorizontal: number = 0;
  @Output() horizontalClicked: EventEmitter<number> = new EventEmitter<number>();
  @Output() verticalClicked: EventEmitter<number> = new EventEmitter<number>();

  onClick(): void {
    console.log(`Move h: ${this.moveHorizontal} $(this.moveHorizontal}`);

    if (this.moveHorizontal != 0) {
      this.horizontalClicked.emit(this.moveHorizontal);
    }
    else {
      this.verticalClicked.emit(this.moveVertical);
    }
  }
}
