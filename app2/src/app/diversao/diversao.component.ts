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
