import { OfertasService } from './../shared/orfertas.service';
import { Oferta } from './../shared/oferta.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'xyz-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css']
})
export class DiversaoComponent implements OnInit {

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
