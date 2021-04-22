import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdCanActivateGuard implements CanActivate {
  constructor(
    private router: Router
  ) { }

  canActivate(
    activatedRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const id = Number(activatedRoute.paramMap.get('id'));
    if (isNaN(id) || id < 1) {
      alert('Invalid Offer Identification!');
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
