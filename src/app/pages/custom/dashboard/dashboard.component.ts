import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AnalysisCriteria } from 'src/app/models/AnalysisCriteria';
import { Analytics } from 'src/app/models/Analytics';
import { InvestmentCriteria } from 'src/app/models/InvestmentCriteria';
import { PropertyAnalysis } from 'src/app/models/PropertyAnalysis';
import { PropertyCriteria } from 'src/app/models/PropertyCriteria';
import { PurchaseCriteria } from 'src/app/models/PurchaseCriteria';
import { User } from 'src/app/models/User';
import { PropertyAnalysisService } from 'src/app/services/property-analysis.service';
import { UserService } from 'src/app/services/user.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  // modalConfig: ModalConfig = {
  //   modalTitle: 'Modal title',
  //   dismissButtonLabel: 'Submit',
  //   closeButtonLabel: 'Cancel'
  // };
  // @ViewChild('modal') private modalComponent: ModalComponent;

//   analysisCriteria: AnalysisCriteria = {
//     id: '',
//     downPayment: 20,
//     loanTerm: 30,
//     interestRate: 7,
//     closingCost: 4,
//     insuranceCost: 300,
//     repairAndMaintenance: 5,
//     vacancy: 5,
//     capitalExpenditure: 5,
//     managementFees: 10,
//     otherExpenses: 0,
//     annualAppreciation: 2,
//     annualIncomeGrowth: 2,
//     annualExpenseGrowth: 2,
//     sellingCost: 3,
// };

// propertyCriteria: PropertyCriteria = {
//     id: '',
//     propertyType: "Multi-Family",
//     state: "FL",
//     city: "Tampa",
//     zipCode: null,
// };

// purchaseCriteria: PurchaseCriteria = {
//   id: '1',
//   purchasePrice: 350000,
//   cashNeeded: 70000,
//   cashOnCashReturn: 8.5,
//   capRate: 5.2,
//   internalRateOfReturn: 15.3,
//   cashFlow: 1200
// };

// investmentCriteria: InvestmentCriteria = {
//     id: '',
//     analysisCriteria: this.analysisCriteria,
//     purchaseCriteria: this.purchaseCriteria,
//     propertyCriteria: this.propertyCriteria,
// };

// analytics: Analytics = {
//   id: '1',
//   totalAnalysesPerformed: 20,
//   cashOnCashReturn: 8.5,
//   cashFlow: 500,
//   capRate: 6.0,
//   cashNeeded: 70000
// };

// propertyAnalysis: PropertyAnalysis = {
//     id: "1",
//     formattedAddress: "123 Main St, Anytown, AN 12345",
//     propertyType: "Multi-Family",
//     units: 2,
//     bedrooms: 3,
//     bathrooms: 2,
//     squareFootage: 1500,
//     purchasePrice: 300000,
//     isPurchasePriceWithinCriteria: true,
//     cashNeeded: 60000,
//     isCashNeededWithinCriteria: true,
//     cashFlow: 500,
//     isCashFlowWithinCriteria: false,
//     cashOnCashReturn: 8.78,
//     isCashOnCashReturnWithinCriteria: true,
//     capRate: 5,
//     isCapRateWithinCriteria: false,
//     internalRateOfReturn: 10,
//     isInternalRateOfReturnWithinCriteria: true,
//     grossScheduledIncome: 2000,
//     grossOperatingIncome: 1700,
//     operatingExpense: 1300,
//     totalExpenses: 1500,
//     netOperatingIncome: 5000,
//     debtCoverageRatio: 1.2,
//     mortgage: 1000,
//     propertyTaxes: 300,
//     insurance: 200,
//     vacancy: 100,
//     repairAndMaintenance: 150,
//     capitalExpenditure: 100,
//     managementFees: 200,
//     otherExpenses: 50,
//     isSaved: false,
//     purchaseCriteriaScore: 50,
//     meetsCriteria: true,
//     address: null,
//     rentComparables: null,
//   };

// user: User | undefined = {
//     id: '',
//     firstName: "Sebastian",
//     lastName: "Arcila",
//     email: "sarcila1998@gmail.com",
//     phone: "",
//     numOfPropertiesMeetingCriteria: 0,
//     numOfAnalysesThisYear: 3,
//     investmentCriteria: this.investmentCriteria,
//     savedProperties: [this.propertyAnalysis],
//     propertyAnalyses: [this.propertyAnalysis, this. propertyAnalysis],
//     analytics: this.analytics
// };

// user: User | undefined;


  constructor(
    public userService: UserService,
    private utilityService: UtilityService,
    private cdr: ChangeDetectorRef
  ) {
    console.log('DashboardComponent')
  }

  ngOnInit() {
    this.userService.getUserDashboardInfo('ED8FCF47-66EC-4BED-9ADE-44602830AA65').subscribe({
      next: (data) => {
        console.log('getUserDashboardInfo response: ', data);
        this.userService.updateUser(data);
      },
      error: (error) => {
        console.error('getUserDashboardInfo Error', error);
        this.utilityService.showError();
      },
      complete: () => {
        // console.log('this.user: ', this.user);     
      }
    });
  }





  // async openModal() {
  //   return await this.modalComponent.open();
  // }
}
