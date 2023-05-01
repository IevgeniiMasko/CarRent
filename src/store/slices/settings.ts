import { LANGS } from '@/data/constants';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// const initialState: ITSettingsState = {
//   lang:
//     typeof window !== 'undefined' ? window.?localStorage.getItem('lang') || LANGS.en : LANGS.en,
// };
export interface ITSettingsState {
  lang: string;
}

const initialState: ITSettingsState = {
  lang: LANGS.UA,
};

export const refundSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<ITSettingsState>) => {
      state.lang = action.payload.lang;
    },
  },
});

export const { setLang } = refundSlice.actions;

export default refundSlice.reducer;
