import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-display-card',
  templateUrl: './data-display-card.component.html',
  styleUrl: './data-display-card.component.scss'
})
export class DataDisplayCardComponent implements OnInit {
  @Input() cssClass: string = '';
  @Input() description: string = '';
  @Input() color: string = '';
  @Input() img: string = '';
  @Input() amount: number | undefined;

  constructor() {
    console.log('DataDisplayCardComponent - amount: ', this.amount);

  }
  ngOnInit(): void {
    console.log('DataDisplayCardComponent - amount: ', this.amount);

  }

  ngAfterViewInit(): void {
    console.log('DataDisplayCardComponent - amount: ', this.amount);
  }
}
