import { ActionReducerMap } from "@ngrx/store"
import { regionCountryDetailsReducer } from "./region-country-detail.reducer"

export interface IApplicationState {
    regionList:any,
    countryList:any
}


export interface IAppState {
    regionData:IApplicationState
  }
export const reducers: ActionReducerMap<IAppState> = {
    regionData:regionCountryDetailsReducer
  }