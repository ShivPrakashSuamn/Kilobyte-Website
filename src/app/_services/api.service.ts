import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_URL = 'http://hmaapi.kilobytetech.com';

  constructor(private http: HttpClient) { }

  get(url: string, options: any) {
    return this.http.get(this.BASE_URL + url, { headers: options });
  }

  post(url: string, formData: any, options: any) {
    return this.http.post(this.BASE_URL + url, formData, options);
  }
  put(url: string, formData: any, options: any) {
    return this.http.put(this.BASE_URL + url, formData, options);
  }
}
