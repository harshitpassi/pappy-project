import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Package } from '../models/package.model';


@Injectable({
  providedIn: 'root'
})
export class PackageService {

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  //HttpMethods

  postPackage(travelPackage: Package){
    return this.http.post(environment.apiBaseUrl+'/createPackage',travelPackage,this.noAuthHeader);
  }

  getPackages() {
    return this.http.get(environment.apiBaseUrl + '/package');
  }

}

  

  

  


