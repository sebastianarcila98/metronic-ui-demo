import { Address } from "./Address";
import { RentComparable } from "./RentComparable";

export interface PropertyAnalysis {
    id: string;
    formattedAddress: string;
    propertyType: string;
    units: number | null;
    bedrooms: number;
    bathrooms: number;
    squareFootage: number;
    purchasePrice: number | null;
    isPurchasePriceWithinCriteria: boolean | null;
    cashNeeded: number | null;
    isCashNeededWithinCriteria: boolean | null;
    cashFlow: number | null;
    isCashFlowWithinCriteria: boolean | null;
    cashOnCashReturn: number | null;
    isCashOnCashReturnWithinCriteria: boolean | null;
    capRate: number | null;
    isCapRateWithinCriteria: boolean | null;
    internalRateOfReturn: number | null;
    isInternalRateOfReturnWithinCriteria: boolean | null;
    grossScheduledIncome: number | null;
    grossOperatingIncome: number | null;
    operatingExpense: number | null;
    totalExpenses: number | null;
    netOperatingIncome: number | null;
    debtCoverageRatio: number | null;
    mortgage: number | null;
    propertyTaxes: number | null;
    insurance: number | null;
    vacancy: number | null;
    repairAndMaintenance: number | null;
    capitalExpenditure: number | null;
    managementFees: number | null;
    otherExpenses: number | null;
    isSaved: boolean;
    purchaseCriteriaScore: number;
    meetsCriteria: boolean;
    address: Address | null;
    rentComparables: RentComparable[] | null;
}