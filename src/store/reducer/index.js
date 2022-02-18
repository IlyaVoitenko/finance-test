import { UPDATE_PRICE_TICKER } from '../actionTypes';
const initialState = {
  listPriceTicker: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PRICE_TICKER:
      return { ...state, listPriceTicker: [...action.payload] };
    default:
      return state;
  }
};
export default reducer;
