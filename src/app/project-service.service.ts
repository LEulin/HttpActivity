import { Injectable } from '@angular/core';
import { Info } from './info';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
}
@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  public apiUrl = "https://jsonplaceholder.typicode.com/users"

  constructor(private httpni: HttpClient) { }

  getData(){
    return this.httpni.get<Info[]>(this.apiUrl);
  }

  addData(detail: Info):Observable<any>{
    return this.httpni.post<Info>(`${this.apiUrl}`,detail)
  }

  updateData(id: any):Observable<any>{
    return this.httpni.put<any>(`${this.apiUrl}/${id}`,httpOptions)
  }

  deleteData(id: any): Observable<any>{
    return this.httpni.delete<any>(`${this.apiUrl}/${id}`,httpOptions)
  }

  getID(id): Observable<any>{
    return this.httpni.get(`${this.apiUrl}/${id}`)
  }





}
