import { Oferta } from './../shared/oferta.model';
import { OfertasService } from './../shared/orfertas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'xyz-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

  public ofertas: Array<Oferta>;
  public wasDataLoaded: Promise<boolean>;

  constructor(
    private readonly ofertasService: OfertasService
  ) { }

  ngOnInit(): void {
    this.getOfertas();
  }

  getOfertas() {
    this.ofertasService.getOfertasPorCategoria('restaurante').subscribe({
      next: ofertas => {
        this.ofertas = ofertas;
        this.wasDataLoaded = Promise.resolve(true);
      }
    });
  }
}
