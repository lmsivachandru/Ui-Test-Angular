import { createAction, props } from '@ngrx/store';

export const setRegion = createAction(
    "[Set Region store ] Set Region store",
  );

  export const getCountryList = createAction(
    "[Get Country store ] Get Country store",
    props<{ regionValue: string }>()
  );
  export const setCountryList = createAction(
    "[Set Country store ] Set Country store",
    props<{ countryList: string }>()
  );