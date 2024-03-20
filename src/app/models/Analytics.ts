export interface Analytics {
    id: string;
    totalAnalysesPerformed: number;
    cashOnCashReturn: number | null;
    cashFlow: number | null;
    capRate: number | null;
    cashNeeded: number | null;
}