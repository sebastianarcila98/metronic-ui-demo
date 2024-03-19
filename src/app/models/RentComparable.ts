import { Address } from "./Address";

export interface RentComparable {
    formattedAddress: string;
    propertyType: string;
    bedrooms: number;
    bathrooms: number;
    squareFootage: number;
    lotSize: number;
    yearBuilt: number;
    status: string;
    price: number;
    listedDate: Date | null;
    removedDate: Date | null;
    lastSeenDate: Date | null;
    daysOnMarket: number;
    distance: number;
    correlation: number;
    address: Address | null;
}
