import * as actionTypes from './actionTypes'
import { Ingredient } from '../../entity/Ingredient'
import { Dispatch } from 'react'
import { IngredientService } from '../../service/IngredientService'
/* ACTION CREATORS*/
export const addIngredient = (name: string) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
}

export const removeIngredient = (name: string) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
}

export const setIngredient = (ingredients: Ingredient[]) => {
    return {
        type: actionTypes.SET_INGREDIENT,
        ingredients: ingredients
    }
}

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
}

export const initIngredient = () => {
    return (dispatch: Dispatch<any>) => {
        IngredientService.getIngredients()
            .then(res => {
               dispatch(setIngredient(res))
            })
            .catch(error => {
               dispatch(fetchIngredientsFailed())
            })

    }
}