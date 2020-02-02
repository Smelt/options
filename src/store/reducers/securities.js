import { SET_TICKER, SET_TICKER_PRICE, SET_OPTION_CHAIN } from '../actions/securities'

const securitiesReducer = {
    tickerPrice : ""
}

export default (state = securitiesReducer, action) => {
    switch (action.type) {
        case SET_TICKER_PRICE:
            return { ...state, tickerPrice: action.price }
        default:
            return state;
    }
};
