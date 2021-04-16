import { DepartmentService } from './department.service';
import { Product } from './models/product.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private dataFromServer: any[] = [
    {id: 1, name: 'Laptop', department_id: 4, price: 40, description: 'Laptop Gamer'},
    {id: 2, name: 'Shirt', department_id: 4, price: 40, description: 'Shirt Desciption'},
    {id: 3, name: 'Polo', department_id: 4, price: 40, description: 'Polo Description'},
    {id: 4, name: 'Mouse', department_id: 4, price: 40, description: 'Mouse Description'},
  ];

  private products: Product[] = [];
  private nextID: number = 5;
  productsEmitter: Subject<Array<Product>> = new Subject<Array<Product>>();

  constructor(private departmentService: DepartmentService) {
    for (let p of this.dataFromServer) {
      this.products.push({
        id: p.id,
        name: p.name,
        price: p.price,
        description: p.description,
        department: this.departmentService.getDepartmentById(p.department_id)
      });
    }
    this.productsEmitter.next(this.products.slice());
  }

  getProducts(): Product[] {
    return this.products.slice();
  }

  addProduct(p: Product): void {
    this.products.push({...p, id: this.nextID++});
    this.productsEmitter.next(this.products.slice());
  }
}
