import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  public name  = new Subject<string>();

  public addData  = new Subject<string>();

  constructor() {}
}
