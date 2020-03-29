import React, { Component } from 'react';
import './Checkout.css';
import { CheckoutSummary } from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route, RouteComponentProps, withRouter, Redirect } from 'react-router-dom'
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';
import { Ingredient } from '../../../entity/Ingredient';

interface StateProps{
    purchased: boolean
    ingredients: Ingredient[]
    totalPrice: number
}
interface Props extends StateProps, RouteComponentProps {

}

class Checkout extends Component<Props>{


    render() {
        let summary = <Redirect to="/" />
        
        if (this.props.ingredients.length > 0) {
            const purchasedRedirect = this.props.purchased? <Redirect to="/" /> : null
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary
                        ingredients={this.props.ingredients}
                        checkoutCancelled={this.checkoutCancelledHandler}
                        checkoutContinued={this.checkoutContinuedHandler} />
                    <Route path={this.props.match.path + '/contact-data'}
                        component={ContactData} />
                </div>
            )
        }

        return summary
    }


    checkoutCancelledHandler = () => {
        this.props.history.goBack()
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }
}

const mapStateToProps = (state: any) => {
    return {
        ingredients: state.burger.ingredients,
        totalePrice: state.burger.totalPrice,
        purchased: state.order.purchased
    }
}


export default connect(mapStateToProps)(withRouter(Checkout))