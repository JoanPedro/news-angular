import { Oferta } from './../shared/oferta.model';
import { OfertasService } from './../shared/orfertas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getOferta(id);
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
