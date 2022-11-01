import { createSlice } from '@reduxjs/toolkit';

import * as actions from 'src/actions/productListActions';

export const PRODUCTS_COUNT__PER_PAGE = 4;

export const initialState = {
  data: [],
  page: 0,
  error: null,
  loading: false,
};

const productListSlice = createSlice({
  name: 'product-list',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(actions.productListLoading, state => {
        return {
          ...state,
          loading: true,
        };
      })
      .addDefaultCase(state => {
        return state;
      });
  },
});

export const productListReducer = productListSlice.reducer;

export const selectProductListState = state => {
  return state.productList;
};
