import { ProductService } from './../shared/product.service';
import { Product } from './../../shared/models/product.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit, OnDestroy {
  private _listFilter: string = '';
  private _sub!: Subscription;

  products: Array<Product> = new Array();
  filteredProducts: Array<Product> = new Array();
  showImage: boolean = false;
  errorMessage: string = '';
  pageTitle: string = "Product List";

  get listFilter(): string { return this._listFilter; }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  constructor(
    private readonly productService: ProductService
  ) { }

  ngOnInit(): void {
    this._sub = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.performFilter('');
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }

  toggleImage: () => void = () => {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): Array<Product> {
    const filterByOnLocaleLowerCase: string = filterBy.toLocaleLowerCase();
    return this.products
      .filter(
        product => product.productName.toLocaleLowerCase().includes(
          filterByOnLocaleLowerCase
        )
      );
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
}
