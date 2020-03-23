import React, { Component } from "react";
import { Burger } from "../../components/Burger/Burger";
import { BuildControls } from "../../components/Burger/BuildControls/BuildControls"
import { Ingredient } from "../../../entity/Ingredient";
import { Modal } from "../../components/UI/Modal/Modal";
import { OrderSummary } from "../../components/Burger/OrderSummary/OrderSummary";
import AxiosOrder from '../../../service/AxiosOrder'
import { Spinner } from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";


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
    loading: boolean
    error: string | null
}
interface Props {

}
class BurgerBuilder extends Component<Props, State>{

    constructor(props: Props) {
        super(props);
        this.state = {
            ingredients: [],
            totalPrice: 4,
            purchasable: false,
            purchase: false,
            loading: false,
            error: null
        }
    }

    componentDidMount() {
        this.setState({ loading: true })
        AxiosOrder.get('https://react-my-burger-df2a5.firebaseio.com/ingredients.json')
            .then(response => {
                let ingredients = Object.keys(response.data).map(ingredient => {
                    return (new Ingredient(ingredient, response.data[ingredient]))
                })
                this.setState({ ingredients: ingredients })
                this.setState({ loading: false })
            })
            .catch(error => {
                this.setState({ error: error })
                console.log(error)
            })
    }


    render() {
        let orderSummary = null
        let burger = this.state.error ? <p>Ingredient can't be loaded</p> : <Spinner />
        if (this.state.ingredients.length > 0) {
            burger = <div>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    purchasable={this.state.purchasable}
                    totalePrice={this.state.totalPrice}
                    ingredientRemoved={(e) => this.removeIngredientHandler(e)}
                    ingredientAdded={(e) => this.addIngredientHandler(e)}
                    ordred={() => this.purchaseHandler()} />
            </div>

            orderSummary = <OrderSummary
                purchaseContinued={this.purchaseContinueHandler}
                purchaseCancelled={this.purchaseCancelHandler}
                ingredientSummary={this.state.ingredients}
                totalePrice={Number(this.state.totalPrice.toFixed(2))} />
        }

        if (this.state.loading) {
            orderSummary = <Spinner />
        }


        return (
            <div>
                <Modal show={this.state.purchase} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </div>
        );
    }

    purchaseContinueHandler = () => {
        this.setState({ loading: true })
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: "sameh",
                adress: {
                    street: 'teboulba',
                    zipCode: '5080'
                },
                email: 'myemail@gmail.com',
                deliveryMethod: 'fastest'
            }
        }
        AxiosOrder.post('orders/json', order)
            .then(response => {
                console.log(response)
                this.setState({ loading: false, purchase: false })
            })
            .catch(error => {
                this.setState({ loading: false, purchase: false })
                console.log(error)
            })
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
export default withErrorHandler(BurgerBuilder)