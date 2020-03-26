import React, { Component } from "react"
import './Orders.css'
import { OrderService } from '../../../service/OrderService'
import { Order } from "../../../entity/Order"
import { OrderComponent } from "../../components/Order/OrderComponent"
import withErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler"
import { Spinner } from "../../components/UI/Spinner/Spinner"

interface State {
    orders: Order[]
    loading: boolean
}

class Orders extends Component<any, State>{
    state = {
        orders: [],
        loading: true
    }
    componentDidMount() {
        OrderService.getOrders()
            .then(res => {

                this.setState({ loading: false, orders: res })
            })
            .catch(error => {
                this.setState({ loading: false })
            })
    }

    render() {
        let orders=null
        orders = this.state.orders.map((ord:Order, index) => (
            <OrderComponent key={index} price={ord.price} ingredients={ord.ingredients}></OrderComponent>     
        ))
        if(this.state.loading)
            orders=<Spinner></Spinner>
        return (
            <div>
                {orders}
            </div>
        )
    }
}

export default withErrorHandler(Orders)