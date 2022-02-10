import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Product} from "./product/product";
import { catchError } from 'rxjs/operators';
import {ProductDetail} from "./product-details/productDetail";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private gateWayUrl = 'http://localhost:56669'
  private product_api = 'product';
  private calc_api = 'vat';


  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  /** GET heroes from the server */
  getProducts(): Observable<Product[]> {
    const requestUrl = `${this.gateWayUrl}/${this.product_api}`;
    return this.http.get<Product[]>(requestUrl)
      .pipe(
        catchError(this.handleError<Product[]>('getProducts', []))
      );
  }

  getProduct(uuid: string): Observable<ProductDetail> {
    const url = `${this.gateWayUrl}/${this.product_api}/${uuid}`;
    return this.http.get<ProductDetail>(url).pipe(
      catchError(this.handleError<ProductDetail>(`getProduct id=${uuid}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      if(error.status){
        const url = '/error/' + error.status;
        this.router.navigate([url]);
      }
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
