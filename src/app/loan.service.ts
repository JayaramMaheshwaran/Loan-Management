import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Loan } from './loan';
@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private baseUrl = 'http://localhost:9111/loans';

  constructor(private http: HttpClient) { }

  getLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>(`${this.baseUrl}`);
  }

  getLoan(id: number): Observable<Loan> {
    return this.http.get<Loan>(`${this.baseUrl}/${id}`);
  }

  addLoan(loan: Loan): Observable<Loan> {
    return this.http.post<Loan>(`${this.baseUrl}`, loan);
  }

  updateLoan(id: number, loan: Loan): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, loan);
  }

  deleteLoan(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
