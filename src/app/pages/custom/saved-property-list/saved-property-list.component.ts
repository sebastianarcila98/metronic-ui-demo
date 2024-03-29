import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyAnalysis } from 'src/app/models/PropertyAnalysis';
import { AuthService } from 'src/app/modules/auth';
import { PropertyAnalysisService } from 'src/app/services/property-analysis.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-saved-property-list',
  templateUrl: './saved-property-list.component.html',
  styleUrl: './saved-property-list.component.scss'
})
export class SavedPropertyListComponent implements OnInit {
  propertyAnalyses: PropertyAnalysis[];
  isLoading: boolean;
  id: string | undefined;

  // propertyAnalysisExample: PropertyAnalysis = {
  //   id: "1",
  //   formattedAddress: "123 Main St, Anytown, AN 12345",
  //   propertyType: "Multi-Family",
  //   units: 2,
  //   bedrooms: 3,
  //   bathrooms: 2,
  //   squareFootage: 1500,
  //   purchasePrice: 300000,
  //   isPurchasePriceWithinCriteria: true,
  //   cashNeeded: 60000,
  //   isCashNeededWithinCriteria: true,
  //   cashFlow: 500,
  //   isCashFlowWithinCriteria: false,
  //   cashOnCashReturn: 8.78,
  //   isCashOnCashReturnWithinCriteria: true,
  //   capRate: 5,
  //   isCapRateWithinCriteria: false,
  //   internalRateOfReturn: 10,
  //   isInternalRateOfReturnWithinCriteria: true,
  //   rentalIncome: 2000,
  //   expenses: 1500,
  //   netOperatingIncome: 5000,
  //   debtCoverageRatio: 1.2,
  //   mortgage: 1000,
  //   propertyTaxes: 300,
  //   insurance: 200,
  //   vacancy: 100,
  //   repairAndMaintenance: 150,
  //   capitalExpenditure: 100,
  //   managementFees: 200,
  //   otherExpenses: 50,
  //   isSaved: false,
  //   address: null,
  //   rentComparables: null,
  // };

  constructor(
    private router: Router,
    private propertyAnalysisService: PropertyAnalysisService,
    private cdr: ChangeDetectorRef,
    private utilityService: UtilityService,
    private authService: AuthService
    ) {
      console.log('SavedPropertyListComponent');
      this.id = this.authService.currentUserValue?.id;
    }
  
  ngOnInit(): void {
    this.isLoading = true;
    this.propertyAnalysisService.getAllSavedPropertiesAnalysis(this.id!).subscribe({
      next: (data) => {
        console.log('getAllSavedPropertiesAnalysis response: ', data);
        this.propertyAnalyses = data;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('getAllSavedPropertiesAnalysis Error', error);
        this.isLoading = false;
        this.cdr.detectChanges();
        this.utilityService.showError();
      },
      complete: () => {
        console.log('propertyAnalyses[]: ', this.propertyAnalyses);     
      }
    });
    console.log('Property Listing component');
  }

  navigateWithState(propertyAnalysis: PropertyAnalysis) {
    console.log('Navigating with state:', propertyAnalysis);
    this.router.navigate(['/properties', propertyAnalysis.id], {
      state: { propertyAnalysis: propertyAnalysis }
    }).then(success => {
        console.log('Navigation success:', success);
    }).catch(error => {
        console.error('Navigation error:', error);
    });
  }

}

