import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ITestState {
  key1: string;
}

const initialState: ITestState = {
  key1: '',
};

export const refundSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setTestData: (state, action: PayloadAction<ITestState>) => {
      state.key1 = action.payload.key1;
    },
  },
});

export const { setTestData } = refundSlice.actions;

export default refundSlice.reducer;
