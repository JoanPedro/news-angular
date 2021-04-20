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

  constructor(
    private readonly ofertasService: OfertasService
  ) {}

  ngOnInit(): void {
    this.awaitForOffers()
      .catch(console.log);
  }

  async awaitForOffers() {
    this.ofertas = await this.ofertasService.getOfertas();
    console.log(this.ofertas);
  }
}