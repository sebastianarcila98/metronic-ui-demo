import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { PropertyAnalysis } from 'src/app/models/PropertyAnalysis';
import { PropertyAnalysisService } from 'src/app/services/property-analysis.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-property-summary-card',
  templateUrl: './property-summary-card.component.html',
  styleUrl: './property-summary-card.component.scss'
})
export class PropertySummaryCardComponent implements OnInit {
  @Input() propertyAnalysis: PropertyAnalysis | undefined;

  constructor(
    private propertyAnalysisService: PropertyAnalysisService,
    private utilityService: UtilityService,
    private cdr: ChangeDetectorRef
  ) {
    console.log('PropertySummaryCardComponent');
  }

  ngOnInit(): void {
    // console.log("PropertySummaryCardComponent propertyAnalysis:", this.propertyAnalysis);
  }

  toggleSave(event: MouseEvent) {
    event.stopPropagation();
    this.propertyAnalysis!.isSaved = !this.propertyAnalysis?.isSaved;
    this.propertyAnalysisService.toggleSavePropertyAnalysisById('ED8FCF47-66EC-4BED-9ADE-44602830AA65', this.propertyAnalysis!.id).subscribe({
      next: (data) => {
        console.log('Saved Successfully');
      },
      error: (error) => {
        console.log('toggleSavePropertyAnalysisById Error', error);
        this.propertyAnalysis!.isSaved = !this.propertyAnalysis?.isSaved;
        this.cdr.detectChanges();
        this.utilityService.showError();
      },
      complete: () => {
        console.log('propertyAnalysis?.isSaved: ', this.propertyAnalysis?.isSaved);     
      }
    });
  }

}
