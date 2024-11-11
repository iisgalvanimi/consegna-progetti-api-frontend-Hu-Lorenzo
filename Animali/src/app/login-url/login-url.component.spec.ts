import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginURLComponent } from './login-url.component';

describe('LoginURLComponent', () => {
  let component: LoginURLComponent;
  let fixture: ComponentFixture<LoginURLComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginURLComponent]
    });
    fixture = TestBed.createComponent(LoginURLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
