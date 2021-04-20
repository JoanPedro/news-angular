import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate(activatedRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const id = Number(activatedRoute.paramMap.get('id'));
    if(isNaN(id) || id < 1) {
      alert('Invalid Product Identification!');
      this.router.navigate(['/products']);
      return false;
    }
    return true;
  }
}
