import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'move-button',
  templateUrl: './move-button.component.html',
  styleUrls: ['./move-button.component.css'],
})
export class MoveButtonComponent implements OnInit {
  @Input() buttonText: string = "button";
  @Input() moveVertical: number = 0;
  @Input() moveHorizontal: number = 0;
  imageMargin: number = 2;
  @Output() buttonClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onClick(): void {
    console.log(`Move h: ${this.moveHorizontal} $(this.moveHorizontal}`);
    this.buttonClicked.emit(this.moveHorizontal);
  }
}
