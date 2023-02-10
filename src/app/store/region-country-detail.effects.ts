import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import  * as GetRegion  from './region-country-detail.action';
import { getCountryList, setCountryList } from "./region-country-detail.action";
import { catchError, concatMap, map, switchMap, tap } from 'rxjs/operators';
import { RegionService } from "../region-service/region.service";
import { EMPTY } from "rxjs";


@Injectable()
export class RergionCountryDetailEffects {
    loadCountryList$ = createEffect(() =>
    this.actions$.pipe(
        ofType(getCountryList),
        concatMap(action => this.regionService.getRegion(action.regionValue)),
        map(memberList => setCountryList({ countryList: memberList })),
        catchError(error => EMPTY)
    )
    )
    constructor(
        private actions$: Actions,
        private regionService:RegionService,
      ) {}
}