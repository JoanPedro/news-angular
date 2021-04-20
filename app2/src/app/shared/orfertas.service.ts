import { Oferta } from './oferta.model';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  private _url = "http://localhost:3000/ofertas";

  constructor (
    private httpClient: HttpClient
  ) { }

  public getOfertas(): Promise<Array<Oferta>> {
    return this.httpClient
      .get<Array<Oferta>>(this._url)
      .toPromise();
  }
}
