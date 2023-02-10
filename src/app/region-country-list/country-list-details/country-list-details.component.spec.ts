import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryListDetailsComponent } from './country-list-details.component';

describe('CountryListDetailsComponent', () => {
  let component: CountryListDetailsComponent;
  let fixture: ComponentFixture<CountryListDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryListDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
