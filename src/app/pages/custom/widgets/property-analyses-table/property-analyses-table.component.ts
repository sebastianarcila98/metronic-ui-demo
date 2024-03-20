import { Component } from '@angular/core';

@Component({
  selector: 'app-property-analyses-table',
  templateUrl: './property-analyses-table.component.html',
  styleUrl: './property-analyses-table.component.scss'
})
export class PropertyAnalysesTableComponent {
  newProperties = ['1', '2', '3', '4', '5'];

  constructor() {
    console.log('PropertyAnalysesTableComponent')
  }
}
