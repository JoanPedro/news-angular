import { Oferta } from './oferta.model';
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  private _url = "http://localhost:3000/ofertas";

  constructor(
    private httpClient: HttpClient
  ) { }

  public getOfertas(): Observable<Array<Oferta>> {
    return this.httpClient
      .get<Array<Oferta>>(`${this._url}?destaque=true`)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  public getOfertasPorCategoria(categoria: string): Observable<Array<Oferta>> {
    /*
      return fetch(`${this._url}?categoria=${categoria}`)
        .then(res => res.json());
    */
    return this.httpClient
      .get<Array<Oferta>>(`${this._url}?categoria=${categoria}`)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  public getOferta(id: number): Observable<Oferta> {
    return this.httpClient
      .get<Oferta>(`${this._url}/${id}`)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage: string;

    err.error instanceof ErrorEvent
      ? errorMessage = `An error occurred: ${err.error.message}`
      : errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;

    return throwError(errorMessage);
  }
}
