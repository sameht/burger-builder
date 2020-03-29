import React, { Component, Dispatch } from "react";
import './ContactData.css'
import { Button } from "../../../components/UI/Button/Button";
import { Ingredient } from "../../../../entity/Ingredient";
import { Spinner } from "../../../components/UI/Spinner/Spinner";
import { RouteComponentProps } from "react-router-dom";
import { Order } from "../../../../entity/Order";
import { Customer } from "../../../../entity/Customer";
import { connect } from "react-redux";
import withErrorHandler from "../../../hoc/WithErrorHandler/WithErrorHandler";
import  * as orderAction from '../../../../store/actions/index'
import { AppState } from "../../../..";

interface DispatchProps {
    onOrderBurger: (order: Order) => void
}

interface StateProps {
    ingredients: Ingredient[]
    totalPrice: number
    loading: boolean
}

interface Props extends DispatchProps, RouteComponentProps, StateProps {}

interface State {
    name: string
    email: string,
    address: {
        street: string,
        postalCode: string
    }
}

class ContactData extends Component<Props, State>{
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
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
        if (this.props.loading) {
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

        const order = new Order(
            new Customer("sameh", "sameh@email.com", "fastest", { street: "teboulba", zipCode: "8050" }),
            this.props.ingredients,
            this.props.totalPrice)

        console.log(order)
        this.props.onOrderBurger(order)

    }
}

const mapStateToProps = (state: AppState) => {
    return {
        ingredients: state.burger.ingredients,
        totalPrice: state.burger.totalPrice,
        loading: state.order.loading
    }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        onOrderBurger : (order: Order) => dispatch(orderAction.purchaseBurger(order))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData))