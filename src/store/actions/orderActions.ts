import * as actionTypes from './actionTypes'
import { OrderService } from '../../service/OrderService'
import { Order } from '../../entity/Order'
import { Dispatch } from 'react'

export const purchaseBurgerSuccess = (id: string, orderData: Order) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData

    }
}


export const purchaseBurgerFail = (error: any) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error

    }
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseBurger = (orderData: Order) => {
    console.log("prchaseBurger:", orderData)
    return (dispatch: Dispatch<any>) => {
        dispatch(purchaseBurgerStart)
        OrderService.postOrder(orderData)
            .then(response => {
                dispatch(purchaseBurgerSuccess(response.data.name, orderData))
            })
            .catch(error => {
                dispatch(purchaseBurgerFail(error))
            })
    }
}


export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
}

export const fetchOrdersSuccess = (orders: Order[]) => {
    console.log(orders)
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}

export const fetchOrdersFail = (error: any) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    }
}

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
}

export const fetchOrders = () => {
    return (dispatch: Dispatch<any>) => {
        dispatch(fetchOrdersStart())
        OrderService.getOrders()
            .then(res => {
                dispatch(fetchOrdersSuccess(res))
            })
            .catch(error => {
                dispatch(fetchOrdersFail(error))

            })
    }
}