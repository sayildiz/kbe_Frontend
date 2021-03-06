import { Injectable } from '@angular/core';
import {Observable, throwError} from "rxjs";
import {Product} from "./product/product";
import { catchError } from 'rxjs/operators';
import {ProductDetail} from "./product-details/productDetail";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private gateWayUrl = 'http://localhost:56669'
  private product_api = 'product';



  constructor(
    private http: HttpClient,
  ) { }

  /** GET heroes from the server */
  getProducts(): Observable<Product[]> {
    const requestUrl = `${this.gateWayUrl}/${this.product_api}`;
    return this.http.get<Product[]>(requestUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  getProduct(uuid: string): Observable<ProductDetail> {
    const url = `${this.gateWayUrl}/${this.product_api}/${uuid}`;
    return this.http.get<ProductDetail>(url).pipe(
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
