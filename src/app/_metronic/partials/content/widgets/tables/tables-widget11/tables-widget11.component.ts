import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables-widget11',
  templateUrl: './tables-widget11.component.html',
})
export class TablesWidget11Component implements OnInit {
  newProperties: string[];

  constructor() {}
  
  ngOnInit(): void {
    this.newProperties = ['1', '2', '3', '4', '5']
    console.log('TablesWidget11Component - New Financial Calculations');
  }
}
