import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(
    private http: HttpClient,
    ) { }
    getRegion(region){
      return this.http.get<any>('https://restcountries.com/v2/region/'+region)
    }
}
