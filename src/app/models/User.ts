import { Analytics } from "./Analytics";
import { InvestmentCriteria } from "./InvestmentCriteria";
import { PropertyAnalysis } from "./PropertyAnalysis";


export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    numOfPropertiesMeetingCriteria: number;
    numOfAnalysesThisYear: number;
    investmentCriteria: InvestmentCriteria;
    savedProperties: PropertyAnalysis[];
    propertyAnalyses: PropertyAnalysis[];
    analytics: Analytics;
}
