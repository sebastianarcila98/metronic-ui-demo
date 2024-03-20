import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-display-card',
  templateUrl: './data-display-card.component.html',
  styleUrl: './data-display-card.component.scss'
})
export class DataDisplayCardComponent {
  @Input() cssClass: string = '';
  @Input() description: string = '';
  @Input() color: string = '';
  @Input() img: string = '';
  @Input() amount: number = 0;

  constructor() {
    console.log('DataDisplayCardComponent');
  }
}
