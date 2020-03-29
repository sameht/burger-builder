import React, { Component, Dispatch } from "react";
import { Burger } from "../../components/Burger/Burger";
import { BuildControls } from "../../components/Burger/BuildControls/BuildControls"
import { Ingredient } from "../../../entity/Ingredient";
import { Modal } from "../../components/UI/Modal/Modal";
import { OrderSummary } from "../../components/Burger/OrderSummary/OrderSummary";
import withErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";
import { RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/index'
import { AppState } from "../../..";

interface StateProps { 
    ingreds: Ingredient[]
    totPrice: number
    error: boolean
}

interface DispatchProps {
    onIngredientAdded: (name: string) => void
    onIngredientRemoved: (name: string) => void
    onInitIngredients: () => void
    onInitPurchase: () => void
}

interface Props extends RouteComponentProps, StateProps, DispatchProps {
}

interface State {
    purchase: boolean
}

class BurgerBuilder extends Component<Props, State>{
    state = {
        purchase: false
    }

    componentDidMount() {
        console.log(this.props.ingreds)
        this.props.onInitIngredients()
    }

    render() {
        let orderSummary = null
        let burger = this.props.error ? <p>Ingredient can't be loaded</p> : null
        if (this.props.ingreds.length > 0) {
            burger = <div>
                <Burger ingredients={this.props.ingreds} />
                <BuildControls
                    purchasable={this.updatePurchaseState()}
                    totalePrice={this.props.totPrice}
                    ingredientRemoved={(e) => this.props.onIngredientRemoved(e)}
                    ingredientAdded={(e) => this.props.onIngredientAdded(e)}
                    ordred={() => this.purchaseHandler()} />
            </div>

            orderSummary = <OrderSummary
                purchaseContinued={this.purchaseContinueHandler}
                purchaseCancelled={this.purchaseCancelHandler}
                ingredientSummary={this.props.ingreds}
                totalePrice={Number(this.props.totPrice.toFixed(2))} />
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
        this.props.onInitPurchase()
        this.props.history.push('/checkout')
    }

    purchaseCancelHandler = () => {
        this.setState({ purchase: false })
    }

    purchaseHandler() {
        this.setState({ purchase: true })
    }

    updatePurchaseState() {
        let sum = this.props.ingreds.reduce((sum, current) => sum + current.quantity, 0);
        return sum > 0
    }

}


const mapStateToProps = (state: AppState) => {
    return {
        ingreds: state.burger.ingredients,
        error: state.burger.error,
        totPrice: state.burger.totalPrice
    }
}

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => {
    return {
        // dispatch actions to the store (reducer) )=> action={type: type of action, ingredientName: data}
        onIngredientAdded: (ingName: string) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName: string) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredient()),
        onInitPurchase: () => dispatch(actions.purchaseInit())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder))