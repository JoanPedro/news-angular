import { Oferta } from './oferta.model';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  private _url = "http://localhost:3000/ofertas";

  constructor (
    private httpClient: HttpClient
  ) { }

  public getOfertas(): Observable<Array<Oferta>> {
    return this.httpClient
      .get<Array<Oferta>>(`${this._url}?destaque=true`);
  }

  public getOfertasPorCategoria(categoria: string): Observable<Array<Oferta>> {
    /*
      return fetch(`${this._url}?categoria=${categoria}`)
        .then(res => res.json());
    */
    return this.httpClient
      .get<Array<Oferta>>(`${this._url}?categoria=${categoria}`);
  }

  public getOferta(id: number): Observable<Oferta> {
    return this.httpClient
      .get<Oferta>(`${this._url}/${id}`);
  }
}
