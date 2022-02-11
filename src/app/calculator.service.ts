import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {Price} from "./vat-calculator/price";

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private gateWayUrl = 'http://localhost:56669'
  private calc_api = 'vat';

  constructor(
    private http: HttpClient,
  ) { }

  getVAT(price: number): Observable<Price> {
    const url = `${this.gateWayUrl}/${this.calc_api}`;
    return this.http.post<Price>(url, price).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
