const { createSlice } = require('@reduxjs/toolkit');

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(state, action) {
      return action.payload;
    },
  },
});
export default filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;
