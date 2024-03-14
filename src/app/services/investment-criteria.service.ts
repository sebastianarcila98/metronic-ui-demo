import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InvestmentCriteria } from '../models/InvestmentCriteria';

@Injectable({
  providedIn: 'root'
})
export class InvestmentCriteriaService {

  constructor(private httpClient: HttpClient) { }

  updateInvestmentCriteria(userId: string, investmentCriteria: InvestmentCriteria): Observable<any> {
		return this.httpClient.put<any>(`${environment.apiUrl}/${userId}/investment-criteria`, investmentCriteria);
	}
}
