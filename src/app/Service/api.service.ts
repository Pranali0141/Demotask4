import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  getObjects(): Observable<any> {
    return this.http.get('https://api.restful-api.dev/objects');
  }

  addObject(object: any): Observable<any> {
    console.log(object);

    return this.http.post('https://api.restful-api.dev/objects', object);
  }
}
