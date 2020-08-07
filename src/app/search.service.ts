import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }
  searchUrl:any;
  url:any;
  getCountries(param): Observable<any>{

  this.searchUrl = {
    1:"https://restcountries.eu/rest/v2/all",
    2:"https://restcountries.eu/rest/v2/name/",
    3:"https://restcountries.eu/rest/v2/name/"+param.searchText+"?fullText=true",
    4:"https://restcountries.eu/rest/v2/alpha/",
    5:"https://restcountries.eu/rest/v2/alpha?codes=",
    6:"https://restcountries.eu/rest/v2/currency/",
    7:"https://restcountries.eu/rest/v2/lang/",
    8:"https://restcountries.eu/rest/v2/capital/",
    9:"https://restcountries.eu/rest/v2/callingcode/",
    10:"https://restcountries.eu/rest/v2/region/",
    11:"https://restcountries.eu/rest/v2/regionalbloc/"
  }
  this.url = (param.value == 3)?this.searchUrl[param.value]:this.searchUrl[param.value]+param.searchText;
  return this.http.get(this.url);
}
}
