import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyAnalysis } from 'src/app/models/PropertyAnalysis';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.scss'
})
export class PropertyListComponent implements OnInit {
  propertyAnalyses: PropertyAnalysis[];

  propertyAnalysisExample: PropertyAnalysis = {
    id: "1",
    formattedAddress: "123 Main St, Anytown, AN 12345",
    propertyType: "Multi-Family",
    units: 2,
    bedrooms: 3,
    bathrooms: 2,
    squareFootage: 1500,
    purchasePrice: 300000,
    isPurchasePriceWithinCriteria: true,
    cashNeeded: 60000,
    isCashNeededWithinCriteria: true,
    cashFlow: 500,
    isCashFlowWithinCriteria: false,
    cashOnCashReturn: 8.78,
    isCashOnCashReturnWithinCriteria: true,
    capRate: 5,
    isCapRateWithinCriteria: false,
    internalRateOfReturn: 10,
    isInternalRateOfReturnWithinCriteria: true,
    rentalIncome: 2000,
    expenses: 1500,
    netOperatingIncome: 5000,
    debtCoverageRatio: 1.2,
    mortgage: 1000,
    propertyTaxes: 300,
    insurance: 200,
    vacancy: 100,
    repairAndMaintenance: 150,
    capitalExpenditure: 100,
    managementFees: 200,
    otherExpenses: 50,
    address: null,
    rentComparables: null,
  };

  constructor(private router: Router) {}
  
  ngOnInit(): void {
    this.propertyAnalyses = [this.propertyAnalysisExample, this.propertyAnalysisExample, this.propertyAnalysisExample, this.propertyAnalysisExample, this.propertyAnalysisExample]
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
