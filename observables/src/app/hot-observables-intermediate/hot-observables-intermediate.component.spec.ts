import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotObservablesIntermediateComponent } from './hot-observables-intermediate.component';

describe('HotObservablesIntermediateComponent', () => {
  let component: HotObservablesIntermediateComponent;
  let fixture: ComponentFixture<HotObservablesIntermediateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotObservablesIntermediateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotObservablesIntermediateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
