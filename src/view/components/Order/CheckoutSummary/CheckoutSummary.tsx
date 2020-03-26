import React, { Component } from 'react';
import './CheckoutSummary.css';
import { Burger } from '../../Burger/Burger';
import { Button } from '../../UI/Button/Button';
import { Ingredient } from '../../../../entity/Ingredient';
interface Props {
    ingredients: Ingredient[]
    checkoutCancelled: () => void
    checkoutContinued : () => void
}

export class CheckoutSummary extends Component<Props>{

    render() {
        return (
            <div className="CheckoutSummary">
                <h1>We hope it tastes wel!</h1>
                <div style={{ width: '100%', margin: 'auto' }} >
                    <Burger ingredients={this.props.ingredients} />
                </div>
                <Button clicked={this.props.checkoutCancelled} btnType="Danger">Cancel</Button>
                <Button clicked={this.props.checkoutContinued} btnType="Success">Continue</Button>
            </div>

        );
    }

}


