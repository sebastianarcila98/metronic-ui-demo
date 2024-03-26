import { Component, Input } from '@angular/core';
import { PropertyAnalysis } from 'src/app/models/PropertyAnalysis';

@Component({
  selector: 'app-property-analyses-table',
  templateUrl: './property-analyses-table.component.html',
  styleUrl: './property-analyses-table.component.scss'
})
export class PropertyAnalysesTableComponent {
  @Input() propertyAnalyses: PropertyAnalysis[] | undefined;

  constructor() {
    console.log('PropertyAnalysesTableComponent')
  }

  get firstFiveProperties() {
    return this.propertyAnalyses?.slice(0, 5);
  }
}