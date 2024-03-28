import { Analytics } from "./Analytics";
import { InvestmentCriteria } from "./InvestmentCriteria";
import { PropertyAnalysis } from "./PropertyAnalysis";


export class User {
    id: string;
    fullName: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string | undefined;
    pic: string;
    phone: string;
    numOfPropertiesMeetingCriteria: number;
    numOfAnalysesThisYear: number;
    investmentCriteria: InvestmentCriteria;
    savedProperties: PropertyAnalysis[];
    propertyAnalyses: PropertyAnalysis[];
    analytics: Analytics;

    setUser(_user: unknown) {
        const user = _user as User;
        this.password = user.password || '';
        this.fullName = user.fullName || '';
        this.email = user.email || '';
    }
}
