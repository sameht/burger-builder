import * as actionTypes from '../actions'
import { Ingredient } from '../../entity/Ingredient';
import { createStore, combineReducers } from 'redux'

export interface IngredientState {
    ingredients: Ingredient[]
    totalPrice: number
}

export interface AppState {
   burger: IngredientState
}
const initialState : IngredientState = {

        ingredients: [
            new Ingredient('Salad', 0),
            new Ingredient('Meat', 0),
            new Ingredient('Cheese', 0),
            new Ingredient('Bacon', 0)
        ],
        totalPrice: 4
    

}


const reducer = (state = initialState, action: any) => {
    switch (action.types) {
        case actionTypes.ADD_INGREDIENT:
            return{
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientIndex].quantity+1
                }
            }
        case actionTypes.REMOVE_INGREDIENT: {
            return{
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientIndex].quantity-1
                }
            }
        }
        default:
            return state
    }
    return state
};

const rootReducer = combineReducers<AppState>({
    burger: reducer
})


const store=createStore<AppState, any, any,any>(rootReducer)
