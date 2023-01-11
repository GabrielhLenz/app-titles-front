import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmesComponent } from './movie-home.component';

describe('FilmesComponent', () => {
  let component: FilmesComponent;
  let fixture: ComponentFixture<FilmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
