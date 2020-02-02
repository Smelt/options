import axios from 'axios'
import CircularJSON from 'circular-json'
export const SET_TICKER = 'SET_TICKER'
export const SET_TICKER_PRICE = 'SET_TICKER_PRICE'
export const SET_OPTION_CHAIN = 'SET_OPTION_CHAIN'

export const startLoadTickerPrice = ticker => {
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch(setTickerPrice(24.55))
        }, 500);
    }
}

const setTickerPrice = price => ({
    type: SET_TICKER_PRICE,
    price
})

const setTicker = ticker => ({
    type: SET_TICKER_PRICE,
    ticker
})

export const startLoadOptionChain = (ticker) => {
    return (dispatch, getState) => {
        const reqId = Math.floor(Math.random() * 10)
        console.log('start load otpion chain')
        axios.get(`http://localhost:3000/api/options/sfix`)
        .then((res) => {
            console.log('axios res')
            console.log(res.data.data.options)
            console.log('attempting to parse')
            console.log(CircularJSON.parse(res.data.data.options))
        })
        .catch((err) => {
            console.log('error')
            console.log(err)
        })
    }
    
}

//https://www.optionsprofitcalculator.com/ajax/getOptions?stock=sfix&reqId=1