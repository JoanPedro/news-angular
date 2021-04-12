import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgstylesComponent } from './ngstyles.component';

describe('NgstylesComponent', () => {
  let component: NgstylesComponent;
  let fixture: ComponentFixture<NgstylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgstylesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgstylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
