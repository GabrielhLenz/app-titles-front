import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSearchComponent } from './tv-search.component';

describe('TvSearchComponent', () => {
  let component: TvSearchComponent;
  let fixture: ComponentFixture<TvSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
