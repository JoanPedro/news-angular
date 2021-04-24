import { Oferta } from './../shared/oferta.model';
import { OfertasService } from '../shared/orfertas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'xyz-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ofertas: Array<Oferta>
  public wasDataLoaded: Promise<boolean>;

  constructor(
    private readonly ofertasService: OfertasService
  ) {}

  ngOnInit(): void {
    this.awaitForOffers();
  }

  awaitForOffers() {
    this.ofertasService.getOfertasPorCategoria('restaurante').subscribe({
      next: ofertas => {
        this.ofertas = ofertas;
        this.wasDataLoaded = Promise.resolve(true);
      },
      error: console.log
    });
  }
}
