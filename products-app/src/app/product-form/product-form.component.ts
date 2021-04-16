import { DepartmentService } from './../department.service';
import { ProductService } from './../product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Department } from '../models/department.model';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, OnDestroy {

  name: string = "";
  department!: Department;
  price: number = 0;
  description: string = "";
  departments: Department[] = [];
  private departmentSubscription: Subscription = new Subscription();

  constructor(
    private readonly productService: ProductService,
    private readonly departmentService: DepartmentService
  ) { }

  ngOnInit(): void {
    this.departments = this.departmentService.getDepartments();
    this.departmentSubscription = this.departmentService.departmentEmitter.subscribe(
      departments => {
        this.departments = departments;
      }
    );
  }

  ngOnDestroy() {
    this.departmentSubscription.unsubscribe();
  }

  save() {
    this.productService.addProduct({
      name: this.name,
      price: this.price,
      description: this.description,
      department: this.department
    })
  }

  clear() {
    this.name = "";
    this.price = 0;
    this.description = "";
    this.department = null;
  }
}
