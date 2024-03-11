import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved-property-list',
  templateUrl: './saved-property-list.component.html',
  styleUrl: './saved-property-list.component.scss'
})
export class SavedPropertyListComponent implements OnInit {
  properties: string[];

  constructor() {}
  
  ngOnInit(): void {
    this.properties = ['1', '2', '2', '2', '2']
    console.log('Property Listing component');
  }
}
