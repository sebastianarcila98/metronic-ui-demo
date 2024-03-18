export interface PurchaseCriteria {
    id: string;
    purchasePrice: number | null;
    cashNeeded: number | null;
    cashOnCashReturn: number | null;
    capRate: number | null;
    internalRateOfReturn: number | null;
    cashFlow: number | null;
}