import { createReducer, on } from '@ngrx/store';
import {
  removeTokenUserModel,
  setTokenUserModel,
} from '../actions/auth.actions';

import { TokenUserModel } from '../../models/tokenUserModel';

export interface AuthState {
  tokenUserModel?: TokenUserModel;
}

const initialAuthState: AuthState = {
  tokenUserModel: undefined,
};

// const state = {
//   tokenUserModel: "VERİ"
// }; // x05312132

// on(removeTokenUserModel, state => {
//     state.tokenUserModel = undefined;
//     return state;
// }),

// const state = {
//   tokenUserModel: undefined
// }; // x05312132

// 1.parametre initial state => ilk durum girişYaptı=false, token:null
// 2+ parametreler => oluşturuduğumuz aksiyonların içini doldurur
export const authReducer = createReducer(
  initialAuthState,
  on(setTokenUserModel, (state, action) => {
    // 1. paramtere o anki state değeri, 2. parametre üzerinde çalıştığımız action
    // state => depodaki o an genel durum.
    // action => bu fonksiyon ve içeriği
    // spread operator kullanma sebebimiz = depo bizden tüm statei geri istiyor
    // bizi ilgilendirmeyen (fonksiyonu kullanırken) bozmak istemiyoruz
    // diğer tüm state'i olduğu gibi geri yolluyorum
    return { ...state, tokenUserModel: action.tokenUserModel };
  }),
  on(removeTokenUserModel, state => {
    const newState: AuthState = { ...state, tokenUserModel: undefined }; // x48746546
    return newState;
  })
);
// state = {
//     tokenUserModel: action.tokenUserModel
// } // x48746546

export const sumOfTwoNumbers = (a: any, b: any) => {
  return a + b;
};
