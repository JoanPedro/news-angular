import { OfertasAPI } from '../../api/ofertas';
import { Oferta } from './oferta.model';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class OfertasService {
  private _ofertas: Array<Oferta> = OfertasAPI.slice();

  public getOfertas(): Array<Oferta> {
    return this._ofertas.slice();
  }
}
