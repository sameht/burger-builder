import React, { Component } from "react";
import { Burger } from "../../components/Burger/Burger";
import { BuildControls } from "../../components/Burger/BuildControls/BuildControls"
import { Ingredient } from "../../../entity/Ingredient";
import { Modal } from "../../components/UI/Modal/Modal";
import { OrderSummary } from "../../components/Burger/OrderSummary/OrderSummary";


export interface IngredientType {
    Salad: number
    Meat: number
    Bacon: number
    Cheese: number
}
const INGREDIENT_PRICES: IngredientType = {
    Salad: 0.5,
    Meat: 0.7,
    Bacon: 2,
    Cheese: 1.7
}

interface State {
    ingredients: Ingredient[]
    totalPrice: number
    purchasable: boolean
    purchase: boolean
}
interface Props {

}
export class BurgerBuilder extends Component<Props, State>{

    constructor(props: Props) {
        super(props);
        this.state = {
            ingredients: [
                new Ingredient("Salad", 0),
                new Ingredient("Meat", 0),
                new Ingredient("Bacon", 0),
                new Ingredient("Cheese", 0)
            ],
            totalPrice: 4,
            purchasable: false,
            purchase: false

        }
    }
    render() {
        return (
            <div>
                <Modal show={this.state.purchase} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                        purchaseContinued={this.purchaseContinueHandler}
                        purchaseCancelled={this.purchaseCancelHandler}
                        ingredientSummary={this.state.ingredients}
                        totalePrice={Number(this.state.totalPrice.toFixed(2))}></OrderSummary>
                </Modal>
                <Burger ingredients={this.state.ingredients} />

                <BuildControls
                    purchasable={this.state.purchasable}
                    totalePrice={this.state.totalPrice}
                    ingredientRemoved={(e) => this.removeIngredientHandler(e)}
                    ingredientAdded={(e) => this.addIngredientHandler(e)}
                    ordred={() => this.purchaseHandler()} />
            </div>
        );
    }

    purchaseContinueHandler = () => {
        alert("continue:")
    }

    purchaseCancelHandler = () => {
        this.setState({ purchase: false })
    }

    purchaseHandler() {
        this.setState({ purchase: true })
    }
    updatePurchaseState(ingredients: Ingredient[]) {
        let sum = ingredients.reduce((sum, current) => sum + current.quantity, 0);
        this.setState({ purchasable: sum > 0 })
    }

    removeIngredientHandler(ingredientLabel: keyof IngredientType) {

        const index = this.state.ingredients.findIndex(ingr => ingr.name === ingredientLabel)
        let ingred = [...this.state.ingredients];

        if (ingred[index].quantity > 0) {
            ingred[index].quantity = ingred[index].quantity - 1;
            let totalPrice = this.state.totalPrice - INGREDIENT_PRICES[ingredientLabel]
            this.setState({ ingredients: ingred, totalPrice: totalPrice })
        }
        this.updatePurchaseState(ingred)
    }

    addIngredientHandler = (ingredientLabel: keyof IngredientType) => {
        const index = this.state.ingredients.findIndex(ingr => ingr.name === ingredientLabel)
        let ingred = [...this.state.ingredients];
        ingred[index].quantity = ingred[index].quantity + 1;
        let totalPrice = this.state.totalPrice + INGREDIENT_PRICES[ingredientLabel]
        this.setState({ ingredients: ingred, totalPrice: totalPrice })
        this.updatePurchaseState(ingred)
    }

}