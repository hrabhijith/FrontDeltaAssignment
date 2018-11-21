import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesSignupComponent } from './movies-signup.component';

describe('MoviesSignupComponent', () => {
  let component: MoviesSignupComponent;
  let fixture: ComponentFixture<MoviesSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
