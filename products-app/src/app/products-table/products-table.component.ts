import { Product } from './../models/product.model';
import { Subscription } from 'rxjs';
import { ProductService } from './../product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit, OnDestroy {
  products: Array<Product>;
  prodColumns: Array<string> = new Array("id", "prodname", "department", "price", "description");

  constructor(
    private readonly productService: ProductService
  ) { }

  private productSubscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.productSubscription = this.productService.productsEmitter.subscribe(
      products => {
        this.products = products;
      }
    )
    console.log(this.products)
  }

  ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }
}
