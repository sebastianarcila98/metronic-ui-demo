import { Component, Input, OnInit } from '@angular/core';
import { PropertyAnalysis } from 'src/app/models/PropertyAnalysis';

@Component({
  selector: 'app-property-summary-card',
  templateUrl: './property-summary-card.component.html',
  styleUrl: './property-summary-card.component.scss'
})
export class PropertySummaryCardComponent implements OnInit {
  @Input() propertyAnalysis: PropertyAnalysis;

  ngOnInit(): void {
    // console.log("PropertySummaryCardComponent propertyAnalysis:", this.propertyAnalysis);
  }

}
