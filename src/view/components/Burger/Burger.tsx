import React, { Component } from "react";
import './Burger.css';
import { BurgerIngredient } from './BurgerIngredient/BurgerIgredient';
import { Ingredient } from "../../../entity/Ingredient";

interface Props {
    ingredients: Ingredient[];
}
export class Burger extends Component<Props>{

    render() {
        let transformedIngrediens = null
        let transformed = this.props.ingredients
            .map(ingredient => {
                return [...Array(ingredient.quantity)].map((d, index )=> {
                    return <BurgerIngredient key= {index} type={ingredient.name} />
                })
            })
            .reduce((arr, elt) => {
                return arr.concat(elt)
            }, []);
        if (transformed.length === 0)
            transformedIngrediens = <p>Start inserting ingredients</p>
        else
            transformedIngrediens = transformed


        return (
            <div>
                <div className="burger">
                    <BurgerIngredient type={"BreadTop"} />
                    {transformedIngrediens}
                    <BurgerIngredient type={"BreadBottom"} />
                </div>
            </div>
        );
    }

}