import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import {retry, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EsLoadUserService {
  constructor(private httpC: HttpClient) { }
  handleError(e){
    console.error(`ERROR in LOAD USER SERVICE | ${e}`);
    return throwError(e);
  }
  reqURL = "https://reqres.in";
  userURL="/api/users";
  getUserData(page):Observable<any>{
    let pageNumber = "?page="+(page||1);
    return this.httpC.get(this.reqURL+this.userURL+pageNumber).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  
}
