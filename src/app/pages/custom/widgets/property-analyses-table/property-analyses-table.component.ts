import { Component, Input } from '@angular/core';
import { PropertyAnalysis } from 'src/app/models/PropertyAnalysis';

@Component({
  selector: 'app-property-analyses-table',
  templateUrl: './property-analyses-table.component.html',
  styleUrl: './property-analyses-table.component.scss'
})
export class PropertyAnalysesTableComponent {
  newProperties = ['1', '2', '3', '4', '5'];
  @Input() propertyAnalyses: PropertyAnalysis[] | undefined;

  constructor() {
    console.log('PropertyAnalysesTableComponent')
  }
}
