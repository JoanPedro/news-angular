import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainlifecycleComponent } from './mainlifecycle.component';

describe('MainlifecycleComponent', () => {
  let component: MainlifecycleComponent;
  let fixture: ComponentFixture<MainlifecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainlifecycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainlifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
