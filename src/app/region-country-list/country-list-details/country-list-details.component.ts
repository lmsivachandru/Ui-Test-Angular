import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-country-list-details',
  templateUrl: './country-list-details.component.html',
  styleUrls: ['./country-list-details.component.css']
})
export class CountryListDetailsComponent implements OnInit {
  @Input() countryDetails:any = [];
  constructor() {
     }

  ngOnInit() {
 
  }
}
