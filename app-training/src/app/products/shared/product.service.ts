import { Product } from './../../shared/models/product.model';
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ProductService {
  private productUrl = 'http://localhost:3000/products';

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getProducts(): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>(this.productUrl).pipe(
      tap(data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getProduct(id: number): Observable<Product | undefined> {
    return this.getProducts()
      .pipe(
        map(
          (products: Array<Product>) => products.find(p => p.productId === id)
        )
      );
  }

  editProduct(product: Product, id: number): Observable<any> {
    return this.httpClient
      .put(`${this.productUrl}/${id}`, product);
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // Send the server to some logging infrastructure.
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // Client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unccessful response code
      // The response body may contain clues as to what went wrong.
      // errorMessage = `Server returned status: ${err.status}, error message is: ${err.message}`
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
