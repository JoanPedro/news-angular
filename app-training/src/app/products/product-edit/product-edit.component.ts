import { Subscription } from 'rxjs';
import { Product } from './../../shared/models/product.model';
import { ProductService } from './../shared/product.service';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, OnDestroy {
  private _product$: Subscription = new Subscription();
  private _product!: Product;
  private _id!: number;

  @ViewChild('formObject')
  signupForm!: NgForm;

  generatedUserByForm!: SimpleForm;
  submitted: boolean = false;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly productService: ProductService
  ) { }

  ngOnInit(): void {
    const param = this.activatedRoute.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this._id = id;
      this.getProduct(id);
    }
  }

  ngOnDestroy(): void {
    this._product$.unsubscribe();
  }

  getProduct(id: number): void {
    this._product$ = this.productService.getProduct(id).subscribe({
      next: product => this._product = product!
    });
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   const formValue: SimpleForm = form.value;
  //   console.log(formValue)
  // }

  onSubmit() {
    this.submitted = true;

    const formValue: SimpleForm = this.signupForm.value;
    const form: NgForm = this.signupForm;

    const productToSubmit: Product = {
      id: this._product.id,
      productId: this._product.productId,
      productName: formValue.productData.productName,
      productCode: formValue.productCode,
      releaseDate: formValue.releaseData,
      description: formValue.productData.description,
      price: formValue.price,
      starRating: this._product.starRating,
      imageUrl: this._product.imageUrl
    }

    this.generatedUserByForm = this.signupForm.value;

    this.productService.editProduct(productToSubmit, this._id).subscribe({
      next: console.log
    });

    this.signupForm.reset();
  }
}

type SimpleForm = {
  productData: UserData,
  productCode: string,
  releaseData: string,
  price: number,
}

type UserData = {
  productName: string,
  description: string
}
