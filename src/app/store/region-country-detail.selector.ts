import { IAppState } from '../store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectRegionState = createFeatureSelector<any>("regionData");

export const getCount = createSelector(
    selectRegionState,
    region => region.regionList
);
export const getCountryListData = createSelector(
    selectRegionState,
    region => region.countryList
);