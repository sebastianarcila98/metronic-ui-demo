import { AnalysisCriteria } from "./AnalysisCriteria";
import { PropertyCriteria } from "./PropertyCriteria";
import { PurchaseCriteria } from "./PurchaseCriteria";

export interface InvestmentCriteria {
    propertyCriteria: PropertyCriteria;
    purchaseCriteria: PurchaseCriteria;
    analysisCriteria: AnalysisCriteria;
}
