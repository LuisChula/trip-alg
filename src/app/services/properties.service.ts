import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  private dataUrl = 'assets/properties.json';

  constructor(private http: HttpClient) {}

  getProperties(): Observable<any> {
    return this.http.get(this.dataUrl);
  }

}
