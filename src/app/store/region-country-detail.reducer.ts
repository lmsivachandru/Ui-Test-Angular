import { Action, createReducer, on } from '@ngrx/store';
import  { setRegion,setCountryList } from './region-country-detail.action'

export const initialRegion = null

export const _regionCountryDetailsReducer = createReducer(
initialRegion,
  on(setRegion , (state)=> ({...state,regionList:[
    { regCode: "europe", name: "Europe" },
    { regCode: "asia", name: "Asia" }
  ]})),
  on(setCountryList , (state,action)=> ({...state,countryList:action.countryList
  }))
)

export function regionCountryDetailsReducer(state: any | undefined, action: Action) {
  return _regionCountryDetailsReducer(state, action);
}