import React, { Component } from "react";
import './Burger.css';
import { BurgerIngredient } from './BurgerIngredient/BurgerIgredient';
import { Ingredient } from "../../../entity/Ingredient";

interface Props {
    ingredients: Ingredient[];
}
export class Burger extends Component<Props>{

    render() {
        let transformedIngrediens = this.props.ingredients.map(ingredient => {
            return [...Array(ingredient.quantity)].map(d => {
                return <BurgerIngredient type={ingredient.name} />
            })
        })
        return (
            <div className="burger">
                <BurgerIngredient type={"BreadTop"} />
                {transformedIngrediens}
                <BurgerIngredient type={"BreadBottom"} />
            </div>
        );
    }

}