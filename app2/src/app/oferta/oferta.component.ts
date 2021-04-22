import { Oferta } from './../shared/oferta.model';
import { OfertasService } from './../shared/orfertas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'xyz-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta;
  public wasDataLoaded: Promise<boolean>;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly ofertasService: OfertasService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (param: ParamMap) => {
        this.getOferta(Number(param.get('id')))
      }
    );
  }

  getOferta(id: number) {
    this.ofertasService.getOferta(id).subscribe({
      next: ofertas => {
        this.oferta = ofertas;
        this.wasDataLoaded = Promise.resolve(true);
      }
    });
  }
}
