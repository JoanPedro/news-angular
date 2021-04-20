import { ProductService } from './../shared/product.service';
import { Product } from './../../shared/models/product.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  private _product$: Subscription = new Subscription();

  pageTitle: string = "Product Detail";
  errorMessage = '';
  product: Product | undefined;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly productService: ProductService
  ) { }

  ngOnInit(): void {
    const param = this.activatedRoute.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }

  ngOnDestroy(): void {
    this._product$.unsubscribe();
  }

  getProduct(id: number): void {
    this._product$ = this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
