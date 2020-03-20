import React, { Component } from "react";

import { Ingredient } from "../../../../entity/Ingredient";
import { Button } from "../../UI/Button/Button";

interface Props {
    ingredientSummary: Ingredient[]
    purchaseCancelled: ()=> void
    purchaseContinued: ()=> void
    totalePrice: number
}

export class OrderSummary extends Component<Props>{

    render() {
        return (
            <div className="OrderSummary">
                <h3>Your order</h3>
                <p>Delicious burger with the following ingredients:</p>
                <ul>
                    {this.props.ingredientSummary.map(ingredient => {
                        return <li key={ingredient.name}>
                            <span style={{ "textTransform": "capitalize" }}>
                                {ingredient.name} :
                            </span> {ingredient.quantity}
                        </li>
                    })}

                </ul>
                <p><strong>Totale Price: {this.props.totalePrice}</strong></p>
                <p>Continue to checkout?</p>
                <Button clicked={this.props.purchaseCancelled} btnType="Danger">CANCEL</Button>
                <Button clicked={this.props.purchaseContinued} btnType="Success">CONTINUE</Button>
            </div>
        );
    }
}