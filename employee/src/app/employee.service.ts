import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = "http://localhost:3000/employees"

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get(this.url);
  }
  saveEmployee(data: any) {
    return this.http.post(this.url, data);
  }
  deleteEmployee(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }
  getCurrentEmployee(id: any) {
    return this.http.get(`${this.url}/${id}`);

  }
  updateEmployee(id: any, data: any) {
    return this.http.put(`${this.url}/${id}`, data);

  }
}
