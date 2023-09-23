import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { navFlag: boolean } = {
  navFlag: true,
};

const NavSlice = createSlice({
  name: 'flag',
  initialState,
  reducers: {
    changeTrue: (state) => {
      state.navFlag = true;
    },
    changeFalse: (state) => {
      state.navFlag = false;
    },
  },
});

export const { changeTrue, changeFalse } = NavSlice.actions;
export default NavSlice.reducer;