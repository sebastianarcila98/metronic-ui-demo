import { CalculationValues } from "./CalculationValues";
import { PropertyCriteria } from "./PropertyCriteria";
import { PurchaseCriteria } from "./PurchaseCriteria";

export interface InvestmentCriteria {
    propertyCriteria: PropertyCriteria;
    purchaseCriteria: PurchaseCriteria;
    calculationValues: CalculationValues;
}
