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

  constructor(
    private readonly ofertasService: OfertasService
  ) { }

  ngOnInit(): void {
    this.getOfertas();
  }

  async getOfertas(): Promise<void> {
    this.ofertas = await this.ofertasService.getOfertasPorCategoria('restaurante');
    console.log(this.ofertas)
  }
}
