import { UPDATE_PRICE_TICKER } from '../actionTypes';

export function getPriceTicker(payload) {
  return { type: UPDATE_PRICE_TICKER, payload };
}
