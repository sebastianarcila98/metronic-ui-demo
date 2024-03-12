import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists-widget4',
  templateUrl: './lists-widget4.component.html',
})
export class ListsWidget4Component implements OnInit {
  @Input() items: number = 6;
  savedProperties: string[];

  constructor() {}
  
  ngOnInit(): void {
    this.savedProperties = ['1', '2', '3', '4', '5', '6']
    console.log('Property Listing component');
  }
}
