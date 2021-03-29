import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable, Component } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

  public canDeactivate: (
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ) => Observable<boolean> | Promise<boolean> | boolean = (component) => {
    return component.canDeactivate();
  }
}
