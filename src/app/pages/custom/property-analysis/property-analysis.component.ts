import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyAnalysis } from 'src/app/models/PropertyAnalysis';
import { RentComparable } from 'src/app/models/RentComparable';
import { PropertyAnalysisService } from 'src/app/services/property-analysis.service';
import { UtilityService } from 'src/app/services/utility.service';
@Component({
  selector: 'app-property-analysis',
  templateUrl: './property-analysis.component.html',
  styleUrl: './property-analysis.component.scss'
})
export class PropertyAnalysisComponent implements OnInit {
  id: string;
  propertyAnalysis: PropertyAnalysis | undefined;
  rentComparables: RentComparable[] | undefined | null;

  // this.propertyAnalysisExample: PropertyAnalysis = {
      //   id: "1",
      //   formattedAddress: "123 Main St, Anytown, AN 12345",
      //   propertyType: "Single Family",
      //   units: null,
      //   bedrooms: 3,
      //   bathrooms: 2,
      //   squareFootage: 1500,
      //   purchasePrice: 300000,
      //   isPurchasePriceWithinCriteria: false,
      //   cashNeeded: 60000,
      //   isCashNeededWithinCriteria: false,
      //   cashFlow: 500,
      //   isCashFlowWithinCriteria: true,
      //   cashOnCashReturn: 8,
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
      //   rentComparables: [this.rentComparableExample, this.rentComparableExample, this.rentComparableExample, this.rentComparableExample, this.rentComparableExample, this.rentComparableExample, this.rentComparableExample, this.rentComparableExample, this.rentComparableExample, this.rentComparableExample]
      // };

  // rentComparableExample: RentComparable = {
  //   formattedAddress: "123 Main St, Anytown, AN 12345",
  //   propertyType: "Single Family",
  //   bedrooms: 3,
  //   bathrooms: 2,
  //   squareFootage: 1500,
  //   lotSize: 5000,
  //   yearBuilt: 1980,
  //   status: "Active",
  //   price: 350000,
  //   listedDate: new Date("2022-01-01"),
  //   removedDate: null,
  //   lastSeenDate: new Date("2022-03-01"),
  //   daysOnMarket: 60,
  //   distance: 1.5,
  //   correlation: 0.85,
  //   address: null
  // };

  // dummy class
  

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private propertyAnalysisService: PropertyAnalysisService,
    private utilityService: UtilityService,
    private cdr: ChangeDetectorRef
  ) { 
    this.route.params.subscribe(params => {
      this.id = params['id']; 
    });
    console.log(`PropertyAnalysisComponent - id: ${this.id}`)
    
    this.propertyAnalysis = this.getNavigationState();
  }

  ngOnInit() {
    if (this.propertyAnalysis == null || this.propertyAnalysis == undefined) {
      this.propertyAnalysisService.getPropertyAnalysisById('ED8FCF47-66EC-4BED-9ADE-44602830AA65', this.id).subscribe({
        next: (data) => {
          console.log('getAllPropertiesAnalysis response: ', data);
          this.propertyAnalysis = data;
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('getAllPropertiesAnalysis Error', error);
          this.utilityService.showError();
        },
        complete: () => {
          console.log('propertyAnalysis: ', this.propertyAnalysis);     
        }
      });
    }
    
    this.propertyAnalysisService.getAllRentComparablesByAnalysisId('ED8FCF47-66EC-4BED-9ADE-44602830AA65', this.id).subscribe({
      next: (data) => {
        console.log('getAllRentComparablesByAnalysisId response: ', data);
        this.rentComparables = data;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('getAllRentComparablesByAnalysisId Error', error);
        this.utilityService.showError();
      },
      complete: () => {
        console.log('rentComparables: ', this.rentComparables);     
      }
    });
  }

  private getNavigationState() : PropertyAnalysis | undefined {
    const routerState = this.router.getCurrentNavigation()?.extras.state;

    if (routerState && routerState.propertyAnalysis) {
      console.log('Received propertyAnalysis:', this.propertyAnalysis);
      return routerState.propertyAnalysis;
    } else {
      console.log('No state passed with navigation. Fetching listing instead.');
      return undefined;
    }
  }
}
