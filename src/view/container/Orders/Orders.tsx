import React, { Component, Dispatch } from "react"
import './Orders.css'
import { Order } from "../../../entity/Order"
import { OrderComponent } from "../../components/Order/OrderComponent"
import withErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler"
import { Spinner } from "../../components/UI/Spinner/Spinner"
import * as actions from '../../../store/actions/index'
import { connect } from "react-redux"
import { AppState } from "../../.."

interface StateProps {
    orders: Order[]
    loading: boolean
}

interface DispatchProps{
    onFetchOrders: () => void
}

interface Props extends StateProps, DispatchProps{}

class Orders extends Component<Props>{

    componentDidMount() {
        console.log("componentDidMount")
        this.props.onFetchOrders()
        console.log(this.props)
    }

    render() {
        let orders : any = <Spinner/>
        console.log(this.props)
        if(this.props.loading===false)
            orders = this.props.orders.map((ord:Order, index) => (
                <OrderComponent key={index} price={ord.price} ingredients={ord.ingredients}></OrderComponent>     
            ))

        return (
            <div>
                {orders}
            </div>
        )
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    }
}

const mapDispatchToProps = (dispatch : Dispatch <any>) => {
    return{
        onFetchOrders: () => dispatch(actions.fetchOrders())
    }
}
export default connect(mapStateToProps , mapDispatchToProps)(withErrorHandler(Orders))