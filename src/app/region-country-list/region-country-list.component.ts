import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setRegion,getCountryList } from '../store/region-country-detail.action';
import { getCount,getCountryListData } from '../store/region-country-detail.selector';
@Component({
  selector: 'app-region-country-list',
  templateUrl: './region-country-list.component.html',
  styleUrls: ['./region-country-list.component.css']
})
export class RegionCountryListComponent implements OnInit {

  regionList$: Observable<any>;
  countryList$: Observable<any>;
  selectedCountry:any = '';
  selectedRegion:any = '';
  countryDetailsData:any = [];
  constructor(
    private store: Store<any>) {
     }

  ngOnInit() {
    this.store.dispatch(setRegion());
    this.regionList$ = this.store.pipe(select(getCount))
  }
  onChange(value){
    this.selectedCountry = [];
    this.countryDetailsData = [];
    this.store.dispatch(getCountryList({regionValue:value}))
    this.countryList$ = this.store.pipe(select(getCountryListData))
  }
  selectCountry(value){
    this.countryList$.subscribe((res)=>{
      this.countryDetailsData = res.filter(res => res.alpha2Code == value )
    })
  }
}
