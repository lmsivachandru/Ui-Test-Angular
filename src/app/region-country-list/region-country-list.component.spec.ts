import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionCountryListComponent } from './region-country-list.component';

describe('RegionCountryListComponent', () => {
  let component: RegionCountryListComponent;
  let fixture: ComponentFixture<RegionCountryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionCountryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionCountryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
