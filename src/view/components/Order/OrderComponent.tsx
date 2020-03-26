import React, { Component } from "react"
import './OrderComponent.css'
import { Ingredient } from "../../../entity/Ingredient"

interface Props {
    price: number
    ingredients: Ingredient[]
}
export class OrderComponent extends Component<Props>{
    render() {
        return (
            <div className='OrderComponent'>
                <p>Ingredients:
                    {this.props.ingredients.map(ingred => (
                    <span>
                        {ingred.name} 
                        ({ingred.quantity})
                    </span>
                ))}
                </p>
                <p>Price:<strong>USD {this.props.price} </strong></p>
            </div>
        )
    }
}