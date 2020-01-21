import { Injectable } from '@angular/core';
import { Info } from './info';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  public apiUrl = "https://jsonplaceholder.typicode.com/users"

  constructor(private httpni: HttpClient) { }

  getData(){
    return this.httpni.get<Info[]>(this.apiUrl);
    
  }
}
