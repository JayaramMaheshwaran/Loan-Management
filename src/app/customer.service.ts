import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Customer } from './customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = 'http://localhost:9111/customers';

  constructor(private httpClient: HttpClient) {}

  registerUser(customer: Customer): Observable<Object> {
    console.log(customer);
    return this.httpClient.post(`${this.baseUrl}`, customer);
  }

  getUser(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`);
  }
  deleteCustomer(id: string): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`, {
      responseType: 'text',
    });
  }
  getCustomer(id: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  updateCustomer(id: string, value: any): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, value);
  }

}


