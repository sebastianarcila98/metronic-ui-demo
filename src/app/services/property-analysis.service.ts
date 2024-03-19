import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertyAnalysis } from '../models/PropertyAnalysis';
import { environment } from 'src/environments/environment';
import { RentComparable } from '../models/RentComparable';

@Injectable({
  providedIn: 'root'
})
export class PropertyAnalysisService {

  constructor(private httpClient: HttpClient) { }

  getPropertyAnalysisById(userId: string, id: string): Observable<PropertyAnalysis> {
    return this.httpClient.get<PropertyAnalysis>(`${environment.apiUrl}/${userId}/property-analysis/${id}`);
  }

  getAllPropertiesAnalysis(userId: string): Observable<PropertyAnalysis[]> {
    return this.httpClient.get<PropertyAnalysis[]>(`${environment.apiUrl}/${userId}/property-analysis/all`);
  }

  getAllSavedPropertiesAnalysis(userId: string): Observable<PropertyAnalysis[]> {
    return this.httpClient.get<PropertyAnalysis[]>(`${environment.apiUrl}/${userId}/property-analysis/all-saved-properties`);
  }

  getAllRentComparablesByAnalysisId(userId: string, id: string): Observable<RentComparable[]> {
    return this.httpClient.get<RentComparable[]>(`${environment.apiUrl}/${userId}/property-analysis/${id}/all-rent-comparables`);
  }

  toggleSavePropertyAnalysisById(userId: string, id: string): Observable<void> {
    return this.httpClient.put<void>(`${environment.apiUrl}/${userId}/property-analysis/${id}/toggle-save`, null);
  }
}
