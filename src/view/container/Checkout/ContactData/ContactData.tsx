import React, { Component } from "react";
import './ContactData.css'
import { Button } from "../../../components/UI/Button/Button";
import { Ingredient } from "../../../../entity/Ingredient";
import AxiosOrder from '../../../../service/AxiosOrder'
import { Spinner } from "../../../components/UI/Spinner/Spinner";
import { RouteComponentProps } from "react-router-dom";
import { OrderService } from "../../../../service/OrderService";
import { Order } from "../../../../entity/Order";
import { Customer } from "../../../../entity/Customer";

interface Props extends RouteComponentProps {
    ingredients: Ingredient[]
    totalPrice: number
}

interface State {
    name: string
    email: string,
    address: {
        street: string,
        postalCode: string
    },
    loading: boolean
}
export class ContactData extends Component<Props, State>{
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }
    render() {
        let form = (
            <form>
                <input className="Input" type='text' name='name' placeholder='Your name' />
                <input className="Input" type='email' name='email' placeholder='Your email' />
                <input className="Input" type='text' name='street' placeholder='Street' />
                <input className="Input" type='text' name='postalCode' placeholder='Postal Code' />
                <Button
                    clicked={(eventClick) => this.orderHandler(eventClick)}
                    btnType='Success'>Order</Button>
            </form>
        )
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className="ContactData">
                <h4> Enter your Contact Data</h4>

                {form}
            </div>
        )
    }

    orderHandler(event: any) {
        event.preventDefault()
        this.setState({ loading: true })
        const order = new Order (
            new Customer("sameh", "sameh@email.com", "fastest", {street: "teboulba", zipCode: "8050"}),
            this.props.ingredients,
            this.props.totalPrice,
        )
        console.log(order)
        OrderService.postOrder(order)
            .then(response => {
                console.log(response)
                this.setState({ loading: false })
                this.props.history.push('/')
        })
            .catch(error => {
                this.setState({ loading: false })
                console.log(error)
            })
    }
}