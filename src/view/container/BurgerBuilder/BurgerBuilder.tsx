import React,{ Component } from "react";
import { Burger } from "../../components/Burger/Burger";
import { BuildControls } from "../../components/Burger/BuildControls/BuildControls"
import { Ingredient } from "../../../entity/Ingredient";

interface State{
    ingredients: Ingredient[]
    totalPrice: number
}
interface Props{

}
const INGREDIENT_PRICES = {
    Salad: 0.5,
    Meat: 0.7,
    Bacon: 2,
    Cheese: 1.7
}
export class BurgerBuilder extends Component<Props, State>{

    constructor(props: Props){
        super(props);
        this.state={
            ingredients : [
                new Ingredient("Salad", 0),
                new Ingredient("Meat", 0),
                new Ingredient("Bacon", 0),
                new Ingredient("Cheese", 0)
            ],
            totalPrice : 4

        }
    }
    render(){
        return(
            <div>
                <Burger ingredients={this.state.ingredients}/>

                <BuildControls 
                    ingredientRemoved={(e)=>this.removeIngredientHandler(e)} 
                    ingredientAdded={(e)=>this.addIngredientHandler(e)} />
            </div>
        );
    }

    removeIngredientHandler(ingredientLabel:any){
        console.log(ingredientLabel)
        const index=this.state.ingredients.findIndex(ingr => ingr.name==ingredientLabel)
        let ingred=[...this.state.ingredients];

        if(ingred[index].quantity>0){
            ingred[index].quantity=ingred[index].quantity-1;

            console.log(ingred)
            // this.state.totalPrice+INGREDIENT_PRICES[ingredientLabel]
            this.setState({ingredients: ingred})
        }
    }
    addIngredientHandler=(ingredientLabel: any)=>{
        console.log(ingredientLabel)
        const index=this.state.ingredients.findIndex(ingr => ingr.name==ingredientLabel)
        let ingred=[...this.state.ingredients];


        ingred[index].quantity=ingred[index].quantity+1;
        console.log(ingred)
        // this.state.totalPrice+INGREDIENT_PRICES[ingredientLabel]
        this.setState({ingredients: ingred})
    }

}