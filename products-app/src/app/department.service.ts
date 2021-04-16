import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Department } from './models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private departments: Department[] = [
    {id:1, name:"Clothing"},
    {id:2, name:"Books"},
    {id:3, name:"Electronics"},
    {id:4, name:"Computers"}
  ];

  private nextID:number = 5;
  departmentEmitter: Subject<Array<Department>>;
  constructor() {
    this.departmentEmitter = new Subject<Array<Department>>();
  }

  getDepartments(): Department[] {
    return this.departments.slice();
  }

  addDepartment(d: Department) {
    this.departments.push({...d, id: this.nextID++});
    this.departmentEmitter.next(this.departments.slice());
  }

  getDepartmentById(id: number) {
    return this.departments.find(i => { return i.id === id });
  }
}
