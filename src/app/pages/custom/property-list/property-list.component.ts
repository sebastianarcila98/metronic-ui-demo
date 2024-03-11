import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.scss'
})
export class PropertyListComponent implements OnInit {
  properties: string[];

  constructor() {}
  
  ngOnInit(): void {
    this.properties = ['1', '2', '2', '2', '2']
    console.log('Property Listing component');
  }

}
