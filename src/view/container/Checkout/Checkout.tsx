import React, { Component } from 'react';
import './Checkout.css';
import { Ingredient } from '../../../entity/Ingredient';
import { CheckoutSummary } from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route, RouteComponentProps, withRouter } from 'react-router-dom'
import { ContactData } from './ContactData/ContactData'

interface State {
    ingredients: Ingredient[]
    totalPrice : number
}
export class Checkout extends Component<any & RouteComponentProps, State>{
    constructor(props: any) {
        super(props)
        this.state = { 
            ingredients: [],
            totalPrice:0 
        }
    }

    UNSAFE_componentWillMount() {
        const query = new URLSearchParams(this.props.history.location.search);
        const ingredients: Ingredient[] = [];
        let price=0;
        query.forEach(function (value, key) {
            if (key === 'price') {
                price = parseInt(value)
            }else{
                ingredients.push(new Ingredient(key, parseInt(value)))
            }
        });
        this.setState({ ingredients: ingredients, totalPrice: price })
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler} />
                <Route path={this.props.match.path + '/contact-data'}
                    render={ (props) => (<ContactData totalPrice={this.state.totalPrice} ingredients={this.state.ingredients} {...props}/>)} />
            </div>

        );
    }


    checkoutCancelledHandler = () => {
        this.props.history.goBack()
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }
}

export default withRouter(Checkout)
