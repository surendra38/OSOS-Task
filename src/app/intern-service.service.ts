import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class InternServiceService {

  apiUrl:any="https://jsonplaceholder.typicode.com/posts";
  data:any=[];
  constructor(private http:HttpClient) { }
  
  getData():Observable<any>{
    return this.http.get<[]>(this.apiUrl);
  }

  
}
