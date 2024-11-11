import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruttaComponent } from './frutta.component';

describe('FruttaComponent', () => {
  let component: FruttaComponent;
  let fixture: ComponentFixture<FruttaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FruttaComponent]
    });
    fixture = TestBed.createComponent(FruttaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
