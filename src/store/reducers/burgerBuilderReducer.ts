import * as actionTypes from '../actions/actionTypes'
import { Ingredient } from '../../entity/Ingredient';

export interface BurgerState {
    ingredients: Ingredient[]
    totalPrice: number
    error: boolean
}

const initialState : BurgerState = {
    ingredients: [],
    totalPrice: 4,
    error: false
}

export interface IngredientType {
    Salad: number
    Meat: number
    Bacon: number
    Cheese: number
}
const INGREDIENT_PRICES: IngredientType = {
    Salad: 0.5,
    Meat: 1.7,
    Bacon: 2,
    Cheese: 0.4
}


export const burgerBuilderReducer = (state = initialState, action: any) => {
    // export const burgerBuilderReducer = (state = initialState, action: {type: any, ingredientName: string}) => {
    console.log(action.type)
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            console.log(state)
            const index = state.ingredients.findIndex(ingr => ingr.name === action.ingredientName)
            let ingred = [...state.ingredients];
            ingred[index].quantity = ingred[index].quantity + 1;
            return{
                ...state,
                ingredients: ingred,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName as  keyof IngredientType]
            }
        case actionTypes.REMOVE_INGREDIENT: {
            console.log(state)
            const index = state.ingredients.findIndex(ingr => ingr.name === action.ingredientName)
            let ingred = [...state.ingredients];
            let price = state.totalPrice
            if(ingred[index].quantity>0){
                price=state.totalPrice - INGREDIENT_PRICES[action.ingredientName as  keyof IngredientType]
                ingred[index].quantity = ingred[index].quantity - 1;
            }
                
            return{
                ...state,
                ingredients: ingred,
                totalPrice: price
            }
        }
        case actionTypes.SET_INGREDIENT: {
            return {
                ...state,
                ingredients: action.ingredients,
                totalPrice: initialState.totalPrice,
                error: false
            }
        }
        case actionTypes.FETCH_INGREDIENTS_FAILED: {
            return {
                ...state,
                error: action.error
            }
        }
        default:
            return state
    }
};
