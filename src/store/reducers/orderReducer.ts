import * as actionTypes from '../actions/actionTypes'
import { Order } from '../../entity/Order'

export interface OrderState {
    orders: Order[]
    loading: boolean
    purchased: boolean
}

const initialState: OrderState = {
    orders: [],
    loading: false,
    purchased: false
}

export const orderReducer = (state: OrderState = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT:
            return {
                ...state,
                purchased: false
            }
        case actionTypes.PURCHASE_BURGER_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: state.orders.concat(action.orderData),
                purchased: true
            };
        case actionTypes.PURCHASE_BURGER_FAIL:
            return {
                ...state, 
                loading: false
            }
            
        case actionTypes.FETCH_ORDERS_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.orders,
                loading: false
            }
        case actionTypes.FETCH_ORDERS_FAIL:
            return {
                ...state,
                loading: false
            }

        default:
            return state 

    }
}