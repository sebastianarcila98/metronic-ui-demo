export interface Address {
    addressLine1: string;
    addressLine2: string | null;
    city: string;
    state: string;
    county: string;
    zip: string;
    longitude: number;
    latitude: number;
}